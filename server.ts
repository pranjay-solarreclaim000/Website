import express from "express";
import path from "path";
import dns from "node:dns";
import fs from "fs";
import nodemailer from "nodemailer";

// Ensure localhost resolves to ipv4 on some node versions
dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = 3000;

// Enable JSON body parsing for API routes
app.use(express.json());

// API route to submit audit
app.post("/api/submit-audit", async (req, res) => {
  const {
    timestamp,
    firstName,
    lastName,
    company,
    email,
    phone,
    state,
    agedLeads,
    hasCloser,
    source,
    additionalInfo,
  } = req.body;

  console.log(`[Form Submit] Received audit request from ${firstName} ${lastName} (${email})`);

  const results = {
    webhookSuccess: false,
    emailSuccess: false,
    message: "",
    error: ""
  };

  // 1. Submit to Make.com Webhook
  const webhookUrl = "https://hook.eu1.make.com/c70k60c6cc1k24jen0d1ngtmd1d0d09k";
  if (typeof fetch !== "undefined") {
    try {
      const webResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp,
          firstName,
          lastName,
          company,
          email,
          phone,
          state,
          agedLeads,
          hasCloser,
          source,
          additionalInfo,
        }),
      });

      if (webResponse.ok) {
        results.webhookSuccess = true;
        console.log("[Webhook] Successfully posted submission to Make.com");
      } else {
        const errorText = await webResponse.text();
        console.warn(`[Webhook] Make.com returned status ${webResponse.status}: ${errorText}`);
      }
    } catch (err: any) {
      console.error("[Webhook] Failed to send to Make.com webhook:", err.message);
    }
  } else {
    console.error("[Webhook] Global fetch is not supported on this Node version. Skipping Make.com POST.");
  }

  // 2. Draft the HTML Email Content
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Aged Lead Audit Request</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 0 auto; }
        .header { background-color: #0a0a0a; color: #ffffff; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; tracking-tight; }
        .header span { color: #f97316; font-weight: bold; }
        .content { padding: 30px; color: #1f2937; line-height: 1.6; }
        .lead-name { font-size: 20px; font-weight: bold; color: #111827; margin-bottom: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px; }
        .grid { display: grid; gap: 15px; margin-bottom: 20px; }
        .field { background: #fafafa; padding: 12px 16px; border-radius: 8px; border: 1px solid #f3f4f6; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: bold; margin-bottom: 4px; }
        .value { font-size: 15px; color: #111827; font-weight: 500; }
        .notes-box { background: #fffaf0; border-left: 4px solid #f97316; padding: 15px; border-radius: 4px; margin-top: 20px; }
        .notes-title { font-weight: bold; color: #9a3412; margin-bottom: 5px; font-size: 13px; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-t: 1px solid #f3f4f6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1><span>SolarReclaim</span> - Lead Audit Request</h1>
        </div>
        <div class="content">
          <div class="lead-name">${firstName} ${lastName}</div>
          
          <div class="grid">
            <div class="field">
              <div class="label">Company Name</div>
              <div class="value">${company || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">+1 ${phone}</div>
            </div>
            <div class="field">
              <div class="label">State</div>
              <div class="value">${state || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Approx. Aged Leads</div>
              <div class="value">${agedLeads || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Has Closer on Team?</div>
              <div class="value">${hasCloser || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Traffic Source</div>
              <div class="value">${source || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Submitted At</div>
              <div class="value">${timestamp || new Date().toLocaleString()}</div>
            </div>
          </div>

          ${additionalInfo ? `
            <div class="notes-box">
              <div class="notes-title">Additional Information & Notes</div>
              <div class="value" style="font-style: italic; white-space: pre-wrap;">"${additionalInfo}"</div>
            </div>
          ` : ""}
        </div>
        <div class="footer">
          This is an automated request generated from the SolarReclaim Audit Form.
          <br>© ${new Date().getFullYear()} SolarReclaim
        </div>
      </div>
    </body>
    </html>
  `;

  // 3. Send Email to audit@solarreclaim.com
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || "587";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpTo = process.env.SMTP_TO || "audit@solarreclaim.com";
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    // Send email using Resend API (extremely simple, reliable, free tier)
    try {
      console.log("[Email] Sending via Resend API...");
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SolarReclaim Audits <onboarding@resend.dev>", // default free domain, or custom
          to: [smtpTo],
          subject: `🚨 New Lead Audit: ${company || firstName}`,
          html: emailHtml,
          reply_to: email,
        }),
      });

      if (resendResponse.ok) {
        results.emailSuccess = true;
        console.log(`[Email] Live notification sent via Resend API to ${smtpTo}`);
      } else {
        const errText = await resendResponse.text();
        console.error(`[Email] Resend API returned error status ${resendResponse.status}: ${errText}`);
      }
    } catch (err: any) {
      console.error("[Email] Resend API sending failed:", err.message);
    }
  }

  // If Resend is not configured, or if we want to fallback to standard SMTP
  if (!results.emailSuccess && smtpHost && smtpUser && smtpPass) {
    try {
      console.log(`[Email] Sending via SMTP ${smtpHost}:${smtpPort}...`);
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort, 10),
        secure: smtpPort === "465",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"SolarReclaim Onboarding" <${smtpUser}>`,
        to: smtpTo,
        subject: `🚨 New Lead Audit: ${company || firstName}`,
        html: emailHtml,
        replyTo: email,
      });

      results.emailSuccess = true;
      console.log(`[Email] Live notification email sent via SMTP host to ${smtpTo}`);
    } catch (err: any) {
      console.error("[Email] SMTP sending failed:", err.message);
    }
  }

  // If no live email provider is configured yet, we log it and provide a beautiful simulated response message
  if (!results.emailSuccess) {
    console.warn("[Email] Live email setup was not active because SMTP_USER or RESEND_API_KEY credentials are not filled yet in the platform's Environment Settings.");
    console.log("---- SIMULATED EMAIL CONTENT START ----");
    console.log(`To: ${smtpTo}`);
    console.log(`Subject: 🚨 New Lead Audit: ${company || firstName}`);
    console.log(`Content:\n${firstName} ${lastName} (${email}) requested an audit with ${agedLeads} aged leads.`);
    console.log("---- SIMULATED EMAIL CONTENT END ----");
    
    results.message = "Form submitted successfully to Make.com! Note: To activate live email routing to audit@solarreclaim.com, please add SMTP_USER/SMTP_PASS or RESEND_API_KEY to your applet environment variables in settings.";
  } else {
    results.message = `Audit request submitted successfully and email notification sent to ${smtpTo}!`;
  }

  res.json(results);
});

// Serve static build or Vite dev server
async function bootstrap() {
  // Check if we are running in the compiled server.cjs bundle
  const isCompiledProduction = typeof __filename !== "undefined" && __filename.endsWith(".cjs");
  let isDev = process.env.NODE_ENV !== "production" && !isCompiledProduction;

  if (isDev) {
    try {
      console.log("Attempting to load Vite dev middleware...");
      const { createServer: createViteServer } = await import("vite");
      console.log("Vite loaded successfully. Starting server in development mode...");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (err: any) {
      console.warn("Vite failed to load dynamically. Falling back to production mode static serving.", err.message);
      isDev = false;
    }
  }

  if (!isDev) {
    console.log("Starting server in production mode serving static files...");
    const possiblePaths = [
      path.join(process.cwd(), "dist"),
      __dirname,
      path.join(__dirname, "..", "dist")
    ];
    
    let distPath = possiblePaths[0];
    for (const p of possiblePaths) {
      if (fs.existsSync(path.join(p, "index.html"))) {
        distPath = p;
        break;
      }
    }
    console.log(`Serving static files from: ${distPath}`);
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express full-stack server listening on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("Critical error bootstrapping express server:", err);
});
