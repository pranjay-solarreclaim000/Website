import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Shield, BarChart3, CheckCircle2, Target, Calendar, Handshake, ArrowRight } from 'lucide-react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { Link } from 'react-router-dom';
import RevenueCalculator from '../components/RevenueCalculator';

export default function Home() {
  useEffect(() => {
    document.title = "SolarReclaim | Recover Revenue From Dead Solar Leads";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Commission-only aged lead reactivation for TX & FL solar installers. Zero upfront. Pay only when deals install.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop" 
            alt="Solar panels on a residential roof - SolarReclaim dead lead reactivation services" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              COMMISSION-ONLY DEAD LEAD REACTIVATION
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Your CRM is a Leaking Bucket of Revenue.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Stop letting your previous marketing spend evaporate. We turn your "dead" database into shown appointments and closed installs—with zero upfront cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact">
                Run My Free Revenue Audit <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/how-it-works" variant="ghost">
                See the Recovery System
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trusted By Bar */}
      <section className="py-8 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest whitespace-nowrap">
            SERVING INSTALLERS IN
          </span>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 text-sm font-bold text-neutral-400 uppercase tracking-wider">
            <span>TEXAS</span>
            <span>FLORIDA</span>
            <span>RESIDENTIAL SOLAR</span>
            <span>COMMISSION-ONLY</span>
            <span>TCPA COMPLIANT</span>
          </div>
        </div>
      </section>

      {/* Core System Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <Eyebrow>THE RECOVERY ENGINE</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">Stop the Revenue Leak.</h2>
            <p className="text-dark-600 text-lg max-w-2xl">
              Every day a lead sits unworked, its value drops. We don't just "call leads"—we plug the leaks in your pipeline to recover the installs you've already paid for.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Light Card */}
            <FadeIn className="md:col-span-2 bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-solar-500" />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">10-Touch Reactivation Cadence</h3>
              <p className="text-dark-600 leading-relaxed mb-8 max-w-lg">
                Not one follow-up. A structured sequence of calls, SMS, and emails over 35 days — designed specifically for TX and FL homeowners who went cold.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-dark-900 bg-neutral-100 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-solar-500" /> Manual Dialing
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-dark-900 bg-neutral-100 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-solar-500" /> DNC Scrubbed
                </span>
              </div>
            </FadeIn>

            {/* Dark Card */}
            <FadeIn delay={0.1} className="bg-dark-900 p-8 md:p-10 rounded-2xl border border-dark-700 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-solar-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Upfront Risk</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Commission-only model. $75 per qualified show. 3–5% on closed installs. If we don't perform, you owe nothing.
              </p>
              <p className="text-white/70 leading-relaxed">
                Qualified shows invoiced Net 7. Commission invoiced Net 14 from confirmed install.
              </p>
            </FadeIn>

            {/* Light Card 1 */}
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 bg-solar-50 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-5 h-5 text-solar-500" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">Weekly Transparent Reporting</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Full visibility into every touch, contact rate, show rate, and conversion. You always know exactly what's happening.
              </p>
            </FadeIn>

            {/* Light Card 2 */}
            <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 bg-solar-50 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-solar-500" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">TCPA-Compliant Operations</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Every dial is manual. Every batch DNC-scrubbed before first touch. Your brand stays protected. Every batch is scrubbed against the National DNC Registry before first contact. Scrubs repeated every 31 days per TCPA requirement.
              </p>
            </FadeIn>

            {/* Dark Stat Card */}
            <FadeIn delay={0.4} className="bg-dark-900 p-8 rounded-2xl border border-dark-700 text-white flex flex-col justify-center">
              <div className="text-5xl font-display font-bold text-solar-500 mb-2">85–95%</div>
              <div className="text-lg font-bold mb-2">Of solar leads go unworked after 1–2 attempts</div>
              <div className="text-white/50 text-sm mb-2">Industry average — your pipeline has recoverable revenue in it right now.</div>
              <div className="text-xs text-white/30">Source: industry benchmark across TX/FL residential solar CRMs. Your results may vary.</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <Eyebrow>WHAT WE DO</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">One Service. One Focus. Maximum Recovery.</h2>
              <p className="text-dark-600 text-lg max-w-2xl">
                We don't generate fresh leads. We don't run ads. We specialize exclusively in reactivating leads already sitting dead in your CRM.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button to="/contact">Book a Free Audit</Button>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Aged Lead Reactivation", desc: "30–365 day old leads worked through a structured 10-touch calling, SMS, and email cadence." },
              { icon: Handshake, title: "Qualified Appointment Delivery", desc: "We book and confirm appointments with homeowners who are ready to have a conversation — then hand them directly to your closer." },
              { icon: BarChart3, title: "Weekly Performance Reporting", desc: "Full call logs, contact rates, show rates, and conversion data delivered every week without fail." }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-light-bg p-8 rounded-2xl border border-neutral-200 hover:border-solar-300 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-solar-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-solar-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-6 bg-dark-bg text-white" aria-labelledby="case-study-heading">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <Eyebrow>BENCHMARK PROJECTION</Eyebrow>
            <h2 id="case-study-heading" className="font-display text-4xl md:text-5xl font-bold mb-4">The Math Behind the Moat.</h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Here is a realistic projection of what happens when you plug 300 dead leads into our reactivation cadence, based on industry averages.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <FadeIn delay={0.1}>
                <div className="text-4xl font-display font-bold text-solar-500 mb-2">300</div>
                <div className="text-lg font-bold text-white">Dead Leads Provided</div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="text-4xl font-display font-bold text-solar-500 mb-2">21</div>
                <div className="text-lg font-bold text-white mb-1">Appointments Booked</div>
                <div className="text-xs text-gray-500 italic">7% booking rate on aged data.</div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="text-4xl font-display font-bold text-solar-500 mb-2">14</div>
                <div className="text-lg font-bold text-white">Qualified Shows</div>
                <div className="text-xs text-gray-500 italic">66% show rate.</div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="text-4xl font-display font-bold text-solar-500 mb-2">3</div>
                <div className="text-lg font-bold text-white">Closed Installs</div>
                <div className="text-xs text-gray-500 italic">21% close rate on shows.</div>
              </FadeIn>
            </div>

            <FadeIn delay={0.5}>
              <div className="bg-dark-900 p-8 rounded-2xl border border-dark-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-solar-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-solar-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Projected ROI</h3>
                    <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Cost Breakdown</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-white/80 text-sm mb-8">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>14 Shows @ $75/show</span>
                    <span className="font-bold text-white">$1,050</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Commission (3% on $60K)</span>
                    <span className="font-bold text-white">$1,800</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-white">Total Cost</span>
                    <span className="font-bold text-solar-500">$2,850</span>
                  </div>
                </div>

                <div className="bg-solar-500/10 border border-solar-500/20 rounded-xl p-6 text-center">
                  <div className="text-sm text-solar-500 font-bold uppercase tracking-wider mb-2">Recovered Revenue</div>
                  <div className="text-4xl font-display font-bold text-white mb-2">$60,000</div>
                  <div className="text-sm text-white/60 mb-4">A 21:1 Return on Investment</div>
                  <div className="text-xs text-white/40 italic leading-tight">
                    *These figures are benchmark estimates based on industry averages. Actual results will vary based on lead age, market, and closer performance.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10-Touch Cadence Section */}
      <section className="py-24 px-6 bg-light-bg" aria-labelledby="cadence-heading">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <Eyebrow>THE 10-TOUCH CADENCE</Eyebrow>
              <h2 id="cadence-heading" className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-6">We Don't Just Call Once.</h2>
              <p className="text-dark-600 text-lg mb-8">
                Our 35-day reactivation sequence is engineered specifically for TX and FL homeowners who went cold. We handle every objection.
              </p>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 text-solar-500 font-bold hover:gap-3 transition-all">
                See the full process <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

              <div className="relative border-l-2 border-neutral-200 pl-8 space-y-12">
            {[
              { day: "Day 1", title: "The Pattern Interrupt", desc: "Double-dial + SMS. We don't ask 'are you still interested?' We ask 'did your utility rate hike hit yet?'" },
              { day: "Day 3", title: "The Value Drop", desc: "Single dial + Email. Focus on $0-down and energy independence, avoiding ITC confusion." },
              { day: "Day 7", title: "The Local Authority", desc: "SMS + Single dial. Referencing recent installs or grid instability in their specific zip code." },
              { day: "Day 14", title: "The Soft Takeaway", desc: "Email + Single dial. 'We are closing out our schedule for the month...'" },
              { day: "Day 35", title: "The Breakup", desc: "Final SMS + Email. 'Assuming you went with another installer or decided to stay with the utility. Closing your file.' (This gets the highest reply rate)." }
            ].map((touch, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-solar-500" />
                <div className="text-solar-500 text-sm font-bold uppercase tracking-wider mb-2">{touch.day}</div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{touch.title}</h3>
                <p className="text-dark-600 leading-relaxed text-sm">{touch.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison & ICP Section */}
      <section className="py-24 px-6 bg-white border-t border-neutral-200" aria-labelledby="comparison-heading">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <Eyebrow>THE MOAT</Eyebrow>
            <h2 id="comparison-heading" className="font-display text-4xl font-bold text-dark-900 mb-4">Why We Outperform the Alternatives.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <FadeIn delay={0.1} className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-bold text-dark-900 mb-4">Fresh Lead Agencies</h3>
              <ul className="space-y-3 text-sm text-dark-600">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✕</span> High upfront retainers ($3k-$5k)</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✕</span> You pay for bad leads</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✕</span> Shared leads with competitors</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <h3 className="text-xl font-bold text-dark-900 mb-4">AI Tools & VAs</h3>
              <ul className="space-y-3 text-sm text-dark-600">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✕</span> Robotic, easily ignored</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✕</span> Cannot handle complex objections</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✕</span> Massive TCPA compliance risks</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-dark-900 p-8 rounded-2xl border border-dark-700 text-white shadow-xl scale-105 z-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-solar-500" /> SolarReclaim
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2"><span className="text-solar-500 font-bold">✓</span> Zero upfront cost</li>
                <li className="flex items-start gap-2"><span className="text-solar-500 font-bold">✓</span> Pay only for shows & installs</li>
                <li className="flex items-start gap-2"><span className="text-solar-500 font-bold">✓</span> 100% TCPA compliant, manual dials</li>
              </ul>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Who We Work With (Our ICP)</h3>
              <div className="bg-light-bg rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-200">
                  <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Qualified Partners</h4>
                  <ul className="text-sm text-dark-600 space-y-2 list-disc list-inside">
                    <li>Installers in TX or FL</li>
                    <li>Doing 8–20 installs per month</li>
                    <li>Have 500+ aged leads in CRM</li>
                    <li>Have a dedicated closer on staff</li>
                  </ul>
                </div>
                <div className="p-6 bg-red-50/50">
                  <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2"><span className="text-lg leading-none">✕</span> Disqualified</h4>
                  <ul className="text-sm text-dark-600 space-y-2 list-disc list-inside">
                    <li>Outside TX or FL</li>
                    <li>Selling strictly on GoodLeap (TX/FL approval rates are too low)</li>
                    <li>No dedicated closer</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Transparent Pricing & Pilot</h3>
              <div className="bg-dark-900 rounded-2xl border border-dark-700 p-8 text-white">
                <div className="mb-8">
                  <h4 className="text-solar-500 font-bold uppercase tracking-wider text-sm mb-4">Commission Structure</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/80">Qualified Show</span>
                      <span className="font-bold text-xl">$75</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/80">Tier 1 Install (Standard)</span>
                      <span className="font-bold text-xl">3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Tier 2 Install (High Volume)</span>
                      <span className="font-bold text-xl">4–5%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-solar-500/10 border border-solar-500/20 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">The 14-Day Pilot Offer</h4>
                  <p className="text-sm text-white/70 mb-4">Hand us 50 dead leads. We'll run them through our cadence for 14 days. You pay $0 upfront, only $75 for the shows we generate.</p>
                  <Button to="/contact" className="w-full justify-center">Start Your Pilot</Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <Eyebrow>F.A.Q</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Common questions from solar installers.</h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              { q: "Do I pay anything upfront?", a: "No. Zero upfront cost, zero setup fee, zero retainer. You pay $75 per qualified homeowner who shows up to an appointment, and 3–5% commission only when a deal installs. If we don't perform, you pay nothing." },
              { q: "What CRMs do you work with?", a: "GoHighLevel, HubSpot, Salesforce, Zoho, and any platform that can export a CSV. If you can get us a list, we can work it." },
              { q: "What happens if my company doesn't qualify?", a: "If you fill out the form and don't meet our ICP (e.g., wrong state, no dedicated closer), we'll tell you immediately on the audit call and point you toward resources or agencies that actually fit your situation. No hard feelings." },
              { q: "How quickly can you start?", a: "Onboarding takes 3–5 business days after agreements are signed. First touches go out in week one." },
              { q: "Do you work outside Texas and Florida?", a: "Not yet. TX and FL are our current focus markets where we have the deepest knowledge of homeowner behavior and installer operations." },
              { q: "What qualifies as a \"show\"?", a: "A homeowner who confirmed their appointment 24 hours in advance, shows up at the scheduled time, and is a verified decision-maker for the property." }
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Ready to Find Out What's in Your CRM?</h2>
            <p className="text-white/60 text-sm">No retainer. No setup fee. $0 upfront.</p>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Book a Free Lead Audit</Button>
            <Button to="/how-it-works" variant="ghost">See How It Works</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
