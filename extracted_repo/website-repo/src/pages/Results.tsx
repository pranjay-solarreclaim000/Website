import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Results() {
  useEffect(() => {
    document.title = "SolarReclaim Results | Performance Data";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Real installer performance data. No invented testimonials. Verified results published as engagements close.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
            alt="Data analytics" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              RESULTS
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Real Data. No Invented Testimonials.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              We publish verified results only. First case studies will be published here as results are confirmed and clients authorize sharing. No invented metrics. No fabricated timelines.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Honest Placeholder Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Eyebrow>IN PROGRESS</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-12">First Engagements Running Now.</h2>
            
            <div className="bg-dark-900 p-10 md:p-16 rounded-3xl border border-dark-700 text-white shadow-xl">
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                SolarReclaim launched in 2026. We are currently in early-stage client engagements. Verified case studies will be published here as results are confirmed and clients authorize sharing. We do not post invented testimonials or fabricated metrics.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-solar-500 font-bold text-lg hover:text-solar-400 transition-colors">
                Want to be our first published case study? Early clients receive our launch rate of $75/qualified show.
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benchmarks Section */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>WHAT WE TRACK</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Performance Benchmarks We Operate Against.</h2>
          </FadeIn>

          <FadeIn delay={0.1} className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-neutral-200">
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-dark-600 font-medium">Contact rate target</td>
                    <td className="p-6 font-bold text-dark-900 text-right">22–28%</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-dark-600 font-medium">Show rate target</td>
                    <td className="p-6 font-bold text-dark-900 text-right">65–70%</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-dark-600 font-medium">Installer close rate benchmark</td>
                    <td className="p-6 font-bold text-dark-900 text-right">15–20%</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-dark-600 font-medium">Lead reactivation window</td>
                    <td className="p-6 font-bold text-dark-900 text-right">30–365 days</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-dark-600 font-medium">Average deal size TX</td>
                    <td className="p-6 font-bold text-solar-500 text-right">$18,000–$24,000</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-dark-600 font-medium">Average deal size FL</td>
                    <td className="p-6 font-bold text-solar-500 text-right">$20,000–$26,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-neutral-50 border-t border-neutral-200 text-sm text-dark-600 text-center">
              All figures are unvalidated benchmark assumptions until real client data replaces them.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-dark-bg text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>WHY WE PUBLISH BENCHMARKS NOT GUARANTEES</Eyebrow>
            <h2 className="font-display text-4xl font-bold">We Control 3 of 7 Links in the Revenue Chain.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1} className="bg-dark-900 p-8 rounded-2xl border border-solar-500/30">
              <h3 className="text-xl font-bold mb-4 text-solar-500">We control:</h3>
              <ul className="space-y-3 text-white/90 font-medium">
                <li>• Contact rate</li>
                <li>• Show rate</li>
                <li>• Appointment quality</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="md:col-span-2 bg-dark-900 p-8 rounded-2xl border border-dark-700">
              <h3 className="text-xl font-bold mb-4 text-white/50">We don't control:</h3>
              <ul className="space-y-3 text-white/50">
                <li>• Installer close rate</li>
                <li>• Deal size</li>
                <li>• Financing approval</li>
                <li>• Closer performance</li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="max-w-3xl">
            <p className="text-xl text-white/80 leading-relaxed">
              Our results reflect what we can control. We track everything we touch, report it weekly, and publish it honestly when clients authorize sharing.
            </p>
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
              { q: "Do you guarantee results?", a: "No. We do not guarantee specific contact rates, show rates, or installs. We guarantee the process — a full 10-touch cadence, manual dialing, DNC scrubbing, weekly reports, and a commission-only structure that means we only earn when you earn." },
              { q: "Why don't you have case studies yet?", a: "We launched in 2026. We will not publish invented testimonials or fabricated numbers. Real results will be posted here as engagements close and clients authorize sharing." },
              { q: "How will I know if it's working?", a: "Weekly reports show total dials, contact rate, callbacks, shows booked, and no-shows. You see everything we touch." },
              { q: "What happens if results are poor?", a: "You pay nothing for shows that don't happen. Commission is only invoiced on confirmed installs. Poor results cost you zero." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <details className="group bg-white p-6 rounded-2xl border border-neutral-200 cursor-pointer shadow-sm [&_summary::-webkit-details-marker]:hidden">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold">Want to Be Our First Published Case Study?</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Apply for Early Access</Button>
            <Button to="/how-it-works" variant="ghost">See How It Works</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
