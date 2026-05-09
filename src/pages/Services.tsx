import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';

export default function Services() {
  useEffect(() => {
    document.title = "SolarReclaim Services | Aged Lead Reactivation";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Commission-only aged lead reactivation for residential solar installers in TX & FL. No upfront cost.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop" 
            alt="Solar panels" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              WHAT WE DO
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              One Service. One Focus. Zero Upfront Cost.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              We reactivate aged leads in your CRM. That's it. No distractions. No upsells.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Service Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>CORE SERVICE</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Aged CRM Lead Reactivation.</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-6">
            <FadeIn delay={0.1} className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-2xl font-bold text-dark-900 mb-2">Commission-Only | TX & FL | 30–365 Day Leads</h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                We take the leads you've already paid for — the ones that went cold after 1–2 follow-ups — and run them through a structured 10-touch reactivation system.
              </p>
              <p className="text-dark-600 leading-relaxed">
                The average solar installer has hundreds of aged leads marked as dead. Most of those homeowners still have the same rising electricity bills. They still own the same house. Nobody has called them back with the right message. We do.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-dark-900 p-8 md:p-12 rounded-2xl border border-dark-700 text-white">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">What's included:</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Full 10-touch cadence (calls, SMS, email)</li>
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> DNC scrub every batch, re-scrubbed every 31 days</li>
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> CNAM — your company name on caller ID</li>
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Lead segmentation by age tier</li>
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> EBR and consent verification before dialing</li>
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Weekly performance reports</li>
                  <li className="flex gap-3 items-start"><span className="text-solar-500 font-bold">✓</span> Appointment confirmation and handoff notes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">What's not included:</h3>
                <ul className="space-y-3 text-white/60">
                  <li className="flex gap-3 items-start"><span className="text-red-400 font-bold">✗</span> Fresh lead generation</li>
                  <li className="flex gap-3 items-start"><span className="text-red-400 font-bold">✗</span> Closing (we book — your closer handles)</li>
                  <li className="flex gap-3 items-start"><span className="text-red-400 font-bold">✗</span> CRM management beyond lead status updates</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lead Age Tiers Section */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>LEAD TIERS</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Two Tiers. Different Strategies. Different Rates.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1} className="bg-light-bg p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Tier 1 — 30 to 90 Day Leads</h3>
              <p className="text-dark-600 leading-relaxed mb-8">
                Went cold recently. Easier to reopen. Often a timing or financing clarity issue.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="font-bold text-dark-900">Commission:</span>
                  <span className="text-solar-500 font-bold">3% of installed deal</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-dark-600">Example:</span>
                  <span className="text-dark-900 font-medium">$18,000 install = $540 commission</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-dark-900 p-8 md:p-10 rounded-2xl border border-dark-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Tier 2 — 90 to 365 Day Leads</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Fully cold. Require longer reactivation arc and stronger messaging. Higher rate reflects difficulty.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-dark-700 pb-2">
                  <span className="font-bold text-white">Commission:</span>
                  <span className="text-solar-500 font-bold">4–5% of installed deal</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-white/60">Example:</span>
                  <span className="text-white font-medium">$20,000 install = $800–$1,000 commission</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="mt-8 text-center">
            <p className="text-sm text-dark-600 italic">
              Note: Volume partnerships available — discuss on your audit call.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 px-6 bg-dark-bg text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>COMPLIANCE</Eyebrow>
            <h2 className="font-display text-4xl font-bold">Built Compliant From Day One.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Manual Dialing Only", desc: "No auto-dialers. No ATDS. Every call made by a live specialist." },
              { title: "DNC Scrubbed Every Batch", desc: "Re-scrubbed every 31 days before any new touches go out." },
              { title: "EBR Verified Per Lead", desc: "Existing Business Relationship coverage checked before first dial." },
              { title: "Revocation Honoured", desc: "Opt-outs respected within 10 business days via any channel." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-dark-900 p-8 rounded-2xl border border-dark-700">
                <h3 className="text-xl font-bold mb-3 text-solar-500">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Find Out How Many of Your Leads Are Recoverable.</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Book a Free Lead Audit</Button>
            <Button to="/who-we-work-with" variant="ghost">See Who We Work With</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
