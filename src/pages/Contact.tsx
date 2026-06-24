import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { Calendar, CheckCircle2, User, Building2, Phone, Mail, Layers, Database, ChevronRight, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    leadCount: "",
    usesCrm: "",
    additionalInfo: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Contact SolarReclaim | Book a Free Lead Audit";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Book a free aged lead audit with SolarReclaim. No commitment. We'll tell you what's recoverable in your CRM.");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        timestamp: new Date().toLocaleString()
      };

      const response = await fetch("/api/submit-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errVal = await response.text();
        throw new Error(`Server Response: ${response.status} — ${errVal}`);
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setErrorMessage(err.message || "Failed to submit request. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          {/* New Optimized Form Module */}
          <FadeIn className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 border border-green-200 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-dark-900">Audit Request Received!</h3>
                  <p className="text-dark-600 mt-2 text-md leading-relaxed">
                    We've securely received your CRM parameters and will analyze your profile shortly.
                  </p>
                </div>

                <div className="bg-solar-500/5 border border-solar-500/20 rounded-2xl p-6 md:p-8 max-w-xl mx-auto my-6 text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-500/10 text-solar-500 text-xs font-bold mb-4">
                    <Calendar className="w-3.5 h-3.5" /> Skip the 24hr Queues
                  </span>
                  <h4 className="font-display font-bold text-dark-900 text-lg md:text-xl mb-2">Want Answers Faster? Book Directly</h4>
                  <p className="text-sm text-dark-600 leading-relaxed mb-6">
                    Connect into Pranjay's schedule live to perform your recovering assessment and mapping overview now.
                  </p>
                  <a 
                    href="https://calendly.com/pranjay-solarreclaim/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white font-bold rounded-full transition-all w-full text-center shadow-md hover:shadow-lg"
                  >
                    Confirm Calendar Booking <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-dark-400 text-sm font-medium hover:text-dark-600 transition-colors"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">Lead Recoverability Audit</h3>
                  <p className="text-neutral-500 text-sm">Tell us about your pipeline context below to get custom audit calculations.</p>
                </div>

                {errorMessage && (
                  <div className="flex gap-2 items-start p-4 bg-red-50 text-red-700 border border-red-100 rounded-xl text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                      <User className="w-4 h-4 text-neutral-400" /> Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900" 
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-neutral-400" /> Company Name *
                    </label>
                    <input 
                      type="text" 
                      name="companyName" 
                      required 
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Solar Solutions LLC"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Num */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-neutral-400" /> Phone Number *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-neutral-500 font-medium text-sm">+1</span>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          setFormData(prev => ({ ...prev, phone: val }));
                        }}
                        maxLength={15}
                        placeholder="8005551234"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900" 
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-neutral-400" /> Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* No of Leads */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-neutral-400" /> Number of Leads *
                    </label>
                    <div className="relative">
                      <select 
                        name="leadCount" 
                        required 
                        value={formData.leadCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900 appearance-none cursor-pointer"
                      >
                        <option value="">Select list size...</option>
                        <option value="Under 500 Leads">Under 500 Leads</option>
                        <option value="500 to 2,000 Leads">500 to 2,000 Leads</option>
                        <option value="2,000 to 10,000 Leads">2,000 to 10,000 Leads</option>
                        <option value="10,000 to 50,000 Leads">10,000 to 50,000 Leads</option>
                        <option value="50,000+ Leads">More than 50,000 Leads</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">▼</span>
                    </div>
                  </div>

                  {/* Do they use CRM? */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                      <Database className="w-4 h-4 text-neutral-400" /> Do you use a CRM? *
                    </label>
                    <div className="relative">
                      <select 
                        name="usesCrm" 
                        required 
                        value={formData.usesCrm}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900 appearance-none cursor-pointer"
                      >
                        <option value="">Select CRM usage...</option>
                        <option value="Yes, actively using CRM">Yes, Active (GoHighLevel/HubSpot/Salesforce)</option>
                        <option value="Yes, but looking to change CRM">Yes, but seeking options</option>
                        <option value="No, keeping records manually">No, using manually (CSV/Excels/Sheets)</option>
                        <option value="No, planning to implement CRM soon">No, but planning to integrate</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">▼</span>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-900 flex items-center gap-2">
                    Anything else (optional)
                  </label>
                  <textarea 
                    name="additionalInfo" 
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Provide any extra details about lead age, list type, or previous campaigns..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 outline-none transition-all text-dark-900 resize-none"
                  ></textarea>
                </div>

                {/* Submit Action Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-solar-500 hover:bg-solar-600 text-white font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-md leading-none"
                >
                  {isSubmitting ? "Generating Preparation Profile..." : "Book My Free Audit →"}
                </button>

                <p className="text-xs text-neutral-400 text-center">
                  Your details are confidential & used solely for generating lead recoverability estimations. Never shared.
                </p>
              </form>
            )}
          </FadeIn>

          {/* Direct Contact */}
          <FadeIn delay={0.2} className="lg:col-span-2 h-fit sticky top-32">
            <div className="bg-dark-900 p-8 md:p-10 rounded-2xl border border-dark-700 text-white">
              <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
              
              <div className="space-y-6 mb-12">
                <div className="space-y-2">
                  <a href="mailto:contact@solarreclaim.com" className="text-lg font-medium hover:text-solar-500 transition-colors block">contact@solarreclaim.com</a>
                  <a href="mailto:pranjay@solarreclaim.com" className="text-lg font-medium hover:text-solar-500 transition-colors block">pranjay@solarreclaim.com</a>
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
