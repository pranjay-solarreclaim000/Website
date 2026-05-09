import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const firstName = formData.get("First Name") as string || "";
    const lastName = formData.get("Last Name") as string || "";
    const company = formData.get("Company Name") as string || "";
    const email = formData.get("Email") as string || "";
    const phone = formData.get("Phone Number") as string || "";
    const state = formData.get("State") as string || "";
    const agedLeads = formData.get("Approx. Aged Leads") as string || "";
    const hasCloser = formData.get("Has Closer?") as string || "";
    const source = formData.get("How did you hear about us?") as string || "";
    const additionalInfo = formData.get("Additional Info") as string || "";
    const timestamp = new Date().toLocaleString();

    try {
      // Send data to Make.com Webhook
      const webhookUrl = "https://hook.us2.make.com/3jfayklmumw686m0574wchvolbho8ggp";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp, firstName, lastName, company, email, phone, state, agedLeads, hasCloser, source, additionalInfo
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Make.com Error (${response.status}): ${errorText}`);
      }

      setIsSubmitted(true);
      
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMessage("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "Contact SolarReclaim | Book a Free Lead Audit";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Book a free aged lead audit with SolarReclaim. No commitment. We'll tell you what's recoverable in your CRM.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1596422846543-75c6ff416d66?q=80&w=2670&auto=format&fit=crop" 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              CONTACT
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Let's Find Out What's Sitting in Your CRM.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Fill out the form below. We respond within 24 hours. No pitch. No funnel. A real person reads every submission.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          
          {/* Form */}
          <FadeIn className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">Audit Request Received</h3>
                <p className="text-dark-600 mb-8">Your information has been securely sent to our team.</p>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 mb-8">
                  <h4 className="font-bold text-dark-900 mb-2">Skip the 24-hour wait.</h4>
                  <p className="text-sm text-dark-600 mb-6">High-intent? Book your audit directly on our calendar right now.</p>
                  <a 
                    href="https://calendly.com/pranjay-solarreclaim/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-solar-500 text-white font-bold rounded-full hover:bg-solar-600 transition-colors w-full sm:w-auto"
                  >
                    Book Time on Calendly
                  </a>
                </div>

                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="text-dark-400 text-sm font-medium hover:text-dark-600 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900">First Name *</label>
                  <input type="text" name="First Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900">Last Name *</label>
                  <input type="text" name="Last Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900">Company Name *</label>
                  <input type="text" name="Company Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900">Email Address *</label>
                  <input type="email" name="Email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900">Phone Number *</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-dark-600 font-medium">+1</span>
                    <input 
                      type="tel" 
                      name="Phone Number" 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all" 
                      required 
                      maxLength={15}
                      pattern="[0-9]{10,15}"
                      placeholder="8005551234"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900">State *</label>
                  <select name="State" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all appearance-none">
                    <option value="">Select State...</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-900">Approx. aged leads in CRM *</label>
                <select name="Approx. Aged Leads" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all appearance-none">
                  <option value="">Select volume...</option>
                  <option value="<100">Under 100</option>
                  <option value="100-300">100–300</option>
                  <option value="300-500">300–500</option>
                  <option value="500-1000">500–1,000</option>
                  <option value="1000+">1,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-900">Do you have a closer on your team? *</label>
                <select name="Has Closer?" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all appearance-none">
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-900">How did you hear about us? *</label>
                <select name="How did you hear about us?" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all appearance-none">
                  <option value="">Select...</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-900">Anything else (optional)</label>
                <textarea name="Additional Info" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full px-[28px] py-[14px] bg-solar-500 text-white font-semibold rounded-full hover:bg-solar-600 transition-colors duration-200 ease-in-out flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? "Submitting..." : "Book My Free Audit"} {!isSubmitting && <span className="text-xl leading-none">→</span>}
              </button>
              {errorMessage && (
                <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center">
                  {errorMessage}
                </div>
              )}
              <p className="text-xs text-gray-500 text-center mt-3">Your information is used only to prepare your free audit. We do not sell or share your data.</p>
            </form>
            )}
          </FadeIn>

          {/* Direct Contact */}
          <FadeIn delay={0.2} className="lg:col-span-2 h-fit sticky top-32">
            <div className="bg-dark-900 p-8 md:p-10 rounded-2xl border border-dark-700 text-white">
              <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
              
              <div className="space-y-6 mb-12">
                <div>
                  <a href="mailto:contact@solarreclaim.com" className="text-lg font-medium hover:text-solar-500 transition-colors block">contact@solarreclaim.com</a>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-500/10 text-solar-500 text-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-solar-500 animate-pulse" />
                  Response within 24 hours
                </div>
              </div>

              <div className="p-6 bg-dark-800 rounded-xl border border-dark-600">
                <p className="text-white/80 leading-relaxed font-medium">
                  We will not pitch you a retainer. We will not send you into an automated funnel.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <Eyebrow>F.A.Q</Eyebrow>
          </FadeIn>

          <div className="space-y-4">
            {[
              { q: "How long is the audit call?", a: "20–30 minutes. We'll review your lead volume and give you a recoverable pipeline estimate before we hang up.", open: true },
              { q: "Do I need to sign anything for the audit?", a: "No. Completely free and non-binding.", open: true },
              { q: "What CRMs do you support?", a: "GoHighLevel, HubSpot, Salesforce, Zoho, and any platform that exports CSV." },
              { q: "How fast can you start?", a: "3–5 business days after agreements are signed." },
              { q: "Do you work outside TX and FL?", a: "Not yet." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <details open={faq.open} className="group bg-white p-6 rounded-2xl border border-neutral-200 cursor-pointer shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-bold text-dark-900 select-none list-none">
                    {faq.q}
                    <span className="transition group-open:rotate-45 text-solar-500 text-2xl leading-none">+</span>
                  </summary>
                  <div className="text-dark-600 text-sm mt-4 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Recover What's in Your CRM?</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Book My Free Audit</Button>
            <Button to="/how-it-works" variant="ghost">See How It Works</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
