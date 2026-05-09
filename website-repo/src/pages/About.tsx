import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Shield, BarChart3 } from 'lucide-react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';

export default function About() {
  useEffect(() => {
    document.title = "About SolarReclaim | The Dead Lead Reactivation Experts";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Learn about SolarReclaim's mission to help TX & FL solar installers recover lost revenue from their aged lead databases.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366754035-e62f8eb83731?q=80&w=2670&auto=format&fit=crop"
            alt="Business professionals discussing strategy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">OUR STORY</Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Turning Dead Data Into <span className="text-solar-500">Real Revenue.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Most solar installers treat their aged leads as a sunk cost. We see them as an untapped goldmine.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <Eyebrow>OUR MISSION</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-6">The Anti-Agency Approach.</h2>
              <p className="text-dark-600 text-lg leading-relaxed mb-6">
                The lead generation industry is broken. Installers are tired of paying thousands in upfront retainers for "fresh" leads that are often shared with five other competitors and barely answer the phone.
              </p>
              <p className="text-dark-600 text-lg leading-relaxed mb-8">
                SolarReclaim was founded to flip the script. We don't ask for your trust upfront—we earn it through performance. By focusing exclusively on <strong>lead reactivation</strong>, we help you recover the marketing spend you've already invested.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-solar-500 shrink-0" />
                  <span className="text-dark-700 font-medium">Zero Upfront Risk</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-solar-500 shrink-0" />
                  <span className="text-dark-700 font-medium">Pure Performance-Based</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-solar-500 shrink-0" />
                  <span className="text-dark-700 font-medium">TCPA Compliant Only</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-solar-500 shrink-0" />
                  <span className="text-dark-700 font-medium">TX & FL Specialists</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-cbb4737fbe9d?q=80&w=2664&auto=format&fit=crop"
                  alt="Analysis and growth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark-900 p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <div className="text-3xl font-bold text-solar-500 mb-1">100%</div>
                <div className="text-sm text-white/70">Commission-only model. We only win when you install a system.</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <Eyebrow>OUR GUIDING PRINCIPLES</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">What We Stand For.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integrity First", desc: "TCPA compliance isn't a suggestion—it's our foundation. We use manual dials and rigorous DNC scrubbing to protect your brand's reputation." },
              { icon: Target, title: "Surgical Focus", desc: "We don't do 'general marketing'. We do one thing: reactivating dead solar leads in Texas and Florida. We've mastered the nuance of these markets." },
              { icon: BarChart3, title: "Radical Transparency", desc: "No 'black box' reporting. You get weekly logs of every touch, every contact, and every show. You know exactly where your revenue is coming from." }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl border border-neutral-200 bg-light-bg hover:border-solar-300 transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-solar-500">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{value.title}</h3>
                <p className="text-dark-600 leading-relaxed">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Ready to reclaim your revenue?</h2>
            <p className="text-white/60 text-lg mb-10">
              Stop letting your database gather dust. Let's see how many installs are hiding in your CRM.
            </p>
            <Button to="/contact" className="px-8 py-4 text-lg">Book Your Free Audit</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
