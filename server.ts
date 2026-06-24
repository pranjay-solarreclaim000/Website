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
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Missing request body" });
    }

    const {
      fullName,
      companyName,
      phone,
      email,
      leadCount,
      usesCrm,
      additionalInfo,
      timestamp,
    } = req.body;

    console.log(`[Form Submit] Received audit request from ${fullName} (${email || "no-email"})`);

    const results = {
      webhookSuccess: false,
      emailSuccess: false,
      message: "",
      error: ""
    };

    // 1. Draft the HTML Email Content
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SolarReclaim — Audit Request Confirmed</title>
      </head>
      <body style="margin:0; padding:0; background-color:#EFEEE9;">
      <center>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EFEEE9;">
        <tr>
          <td align="center" style="padding:32px 16px;">

            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF; max-width:600px; border-radius:14px; overflow:hidden; border:1px solid #E5E3DC;">

              <!-- HEADER / LOGO -->
              <tr>
                <td style="background-color:#0E0E10; padding:26px 32px 18px 32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-family: Georgia, 'Times New Roman', serif; font-size:21px; color:#FFFFFF; font-weight:bold; letter-spacing:0.2px;">
                        <span style="color:#F2760D;">●</span>&nbsp; SolarReclaim
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- BADGE -->
              <tr>
                <td style="background-color:#0E0E10; padding:0 32px 26px 32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color:#1C1C1E; border:1px solid #333333; border-radius:20px; padding:6px 14px; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#FFFFFF; letter-spacing:0.4px;">
                        <span style="color:#F2760D;">●</span>&nbsp; AUDIT REQUEST CONFIRMED
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- INTRO -->
              <tr>
                <td style="padding:34px 32px 6px 32px; font-family: Arial, Helvetica, sans-serif;">
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.6; margin:0 0 16px 0;">Hi ${fullName},</p>
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.6; margin:0 0 16px 0;">Got your Lead Recoverability Audit request for <strong>${companyName || "your company"}</strong> — thanks for sending it over.</p>
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.6; margin:0 0 18px 0;">Here's what I've got on your end:</p>
                </td>
              </tr>

              <!-- SNAPSHOT CARD -->
              <tr>
                <td style="padding:0 32px 6px 32px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F7F3; border:1px solid #E8E6DF; border-radius:10px;">
                    <tr>
                      <td style="padding:18px 20px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#1A1A1A;">
                          <tr>
                            <td style="padding:6px 0; color:#777771;">Company</td>
                            <td style="padding:6px 0; text-align:right; font-weight:bold;">${companyName || "N/A"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0; color:#777771; border-top:1px solid #E8E6DF;">Number of Leads</td>
                            <td style="padding:6px 0; text-align:right; font-weight:bold; border-top:1px solid #E8E6DF;">${leadCount || "N/A"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0; color:#777771; border-top:1px solid #E8E6DF;">CRM in Use</td>
                            <td style="padding:6px 0; text-align:right; font-weight:bold; border-top:1px solid #E8E6DF;">${usesCrm || "N/A"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0; color:#777771; border-top:1px solid #E8E6DF; vertical-align:top;">Notes</td>
                            <td style="padding:6px 0; text-align:right; font-weight:bold; border-top:1px solid #E8E6DF;">${additionalInfo || "None"}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- NEXT STEPS -->
              <tr>
                <td style="padding:22px 32px 6px 32px; font-family: Arial, Helvetica, sans-serif;">
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.6; margin:0 0 16px 0;">I'm running these numbers against TX/FL recovery benchmarks now. You'll have your custom audit — recoverable lead value, projected booked appointments, and estimated closed revenue — back in your inbox within <strong>24 hours</strong>.</p>
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.6; margin:0 0 26px 0;">No call needed to get the numbers. When you're ready to walk through them, grab a slot below.</p>
                </td>
              </tr>

              <!-- CTA BUTTON -->
              <tr>
                <td align="center" style="padding:0 32px 34px 32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color:#F2760D; border-radius:30px;">
                        <a href="https://calendly.com/solarreclaim" target="_blank" style="display:inline-block; padding:14px 32px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:bold; color:#FFFFFF; text-decoration:none; border-radius:30px;">Book a Time to Review It →</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- DIVIDER -->
              <tr>
                <td style="padding:0 32px;">
                  <div style="border-top:1px solid #ECEBE5; line-height:1px; font-size:1px;">&nbsp;</div>
                </td>
              </tr>

              <!-- SIGN OFF -->
              <tr>
                <td style="padding:24px 32px 30px 32px; font-family: Arial, Helvetica, sans-serif;">
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.5; margin:0 0 2px 0;">Talk soon,</p>
                  <p style="font-size:15px; color:#1A1A1A; line-height:1.5; margin:0; font-weight:bold;">Pranjay</p>
                  <p style="font-size:13px; color:#777771; line-height:1.5; margin:2px 0 0 0;">Founder, SolarReclaim</p>
                </td>
              </tr>

              <!-- FOOTER BADGE STRIP (matches site footer) -->
              <tr>
                <td style="background-color:#0E0E10; padding:20px 32px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-family:Arial, Helvetica, sans-serif; font-size:10px; color:#8C8C86; letter-spacing:0.8px; padding-bottom:8px;">SERVING INSTALLERS IN</td>
                    </tr>
                    <tr>
                      <td style="font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#D6D5CF; letter-spacing:0.3px;">
                        TEXAS&nbsp;&nbsp;•&nbsp;&nbsp;FLORIDA&nbsp;&nbsp;•&nbsp;&nbsp;RESIDENTIAL SOLAR&nbsp;&nbsp;•&nbsp;&nbsp;COMMISSION-ONLY&nbsp;&nbsp;•&nbsp;&nbsp;TCPA COMPLIANT
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- LEGAL FOOTER -->
              <tr>
                <td align="center" style="background-color:#FFFFFF; padding:20px 32px; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#9A9A93; line-height:1.6;">
                  SolarReclaim — Lead Reactivation for TX/FL Solar Installers<br>
                  You're receiving this because you requested a Lead Recoverability Audit on our site.<br>
                  Reply "remove" anytime and we'll take care of it.
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
      </center>
      </body>
      </html>
    `;

    // 2. Submit to Make.com Webhook
    const webhookUrl = process.env.VITE_AUTOMATION_WEBHOOK || 
                       process.env.VITE_AUTOMATION_WEBHOO || 
                       process.env.AUTOMATION_WEBHOOK || 
                       "https://hook.eu1.make.com/c70k60c6cc1k24jen0d1ngtmd1d0d09k";

    console.log(`[Webhook] Submitting lead request to: ${webhookUrl}`);

    try {
      const webResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Timestamp": timestamp || new Date().toLocaleString(),
          "Full Name": fullName,
          "Company Name": companyName,
          "Phone Number": phone,
          "Email Address": email,
          "Number of Leads": leadCount,
          "Uses CRM?": usesCrm,
          "Additional Info": additionalInfo,
          "Email HTML": emailHtml
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

    // 3. Send Email to audit@solarreclaim.com via Resend or SMTP safely
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || "587";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || "audit@solarreclaim.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        console.log("[Email] Sending confirmation to lead via Resend API...");
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SolarReclaim Audits <onboarding@resend.dev>",
            to: [email],
            bcc: [smtpTo], // send copy to internal
            subject: `SolarReclaim — Audit Request Confirmed`,
            html: emailHtml,
            reply_to: "audit@solarreclaim.com",
          }),
        });

        if (resendResponse.ok) {
          results.emailSuccess = true;
          console.log(`[Email] Confirmation successfully sent to ${email}`);
        } else {
          const errText = await resendResponse.text();
          console.error(`[Email] Resend API returned error status ${resendResponse.status}: ${errText}`);
        }
      } catch (err: any) {
        console.error("[Email] Resend API sending failed:", err.message);
      }
    }

    if (!results.emailSuccess && smtpHost && smtpUser && smtpPass) {
      try {
        console.log(`[Email] Sending confirmation via SMTP...`);
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
          from: `"SolarReclaim Audits" <${smtpUser}>`,
          to: email,
          bcc: smtpTo, // send copy to internal
          subject: `SolarReclaim — Audit Request Confirmed`,
          html: emailHtml,
          replyTo: "audit@solarreclaim.com",
        });

        results.emailSuccess = true;
        console.log(`[Email] Confirmation successfully sent via SMTP to ${email}`);
      } catch (err: any) {
        console.error("[Email] SMTP sending failed:", err.message);
      }
    }

    // Clean simulation visual logs when no live email provider has credentials defined
    if (!results.emailSuccess) {
      console.log("---- SIMULATED EMAIL CONTENT START ----");
      console.log(`To: ${email}`);
      console.log(`Bcc: ${smtpTo}`);
      console.log(`Subject: SolarReclaim — Audit Request Confirmed`);
      console.log(`Lead Name: ${fullName}`);
      console.log(`Company: ${companyName}`);
      console.log(`Leads: ${leadCount}`);
      console.log("---- SIMULATED EMAIL CONTENT END ----");
      
      results.message = "Form submitted successfully to Make.com! Make sure RESEND_API_KEY or SMTP credentials are set in environment variables for live standard email triggers.";
    } else {
      results.message = `Audit request submitted successfully and confirmation sent to ${email}!`;
    }

    res.json(results);
  } catch (globalErr: any) {
    console.error("[Root Handler Error]: Failed processing audit submit", globalErr);
    res.status(500).json({ error: globalErr.message || "Internal Server Error in audit submit handler" });
  }
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

    let staticPath = possiblePaths[0];
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        staticPath = p;
        break;
      }
    }
    
    console.log("Serving static assets from:", staticPath);
    app.use(express.static(staticPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

bootstrap();
