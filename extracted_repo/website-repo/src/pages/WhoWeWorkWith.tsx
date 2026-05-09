import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhoWeWorkWith() {
  useEffect(() => {
    document.title = "Who SolarReclaim Works With | TX & FL Solar Installers";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "SolarReclaim works with mid-size residential solar installers in Texas and Florida with aged CRM leads.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1620814421259-71d791280c43?q=80&w=2670&auto=format&fit=crop" 
            alt="Solar installation team" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              IDEAL CLIENT
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              We're Selective. Here's Exactly Who We Work With.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Ideal Fit Section */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>SUCCESS PROFILE</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900">Our Most Successful Partners</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Residential solar installer in Texas or Florida",
              "8–25 installs per month",
              "4.2+ Google rating",
              "Using GoHighLevel, HubSpot, Salesforce, or similar CRM",
              "100+ aged leads from the past 30–365 days sitting unworked",
              "Dedicated closer available to take appointments",
              "Average deal size $15,000 or above",
              "Offer $0-down financing options to homeowners"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className={`${i % 3 === 0 ? 'bg-dark-900 text-white border-dark-700' : 'bg-white text-dark-900 border-neutral-200'} p-6 rounded-xl border shadow-sm flex items-start gap-4`}>
                <CheckCircle2 className={`w-6 h-6 shrink-0 ${i % 3 === 0 ? 'text-solar-500' : 'text-solar-500'}`} />
                <span className="font-medium text-lg">{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Not A Fit Section */}
      <section className="py-24 px-6 bg-dark-bg text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>NOT A FIT</Eyebrow>
            <h2 className="font-display text-4xl font-bold">We're Probably Not Right For You If:</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Outside Texas or Florida",
              "Fewer than 8 installs per month",
              "No CRM or can't export aged leads",
              "Fewer than 100 aged leads in your CRM.",
              "No closer on the team",
              "Google rating below 4.0",
              "Looking for fresh lead generation"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-dark-900 p-6 rounded-xl border border-dark-700 flex items-start gap-4">
                <XCircle className="w-6 h-6 shrink-0 text-red-500" />
                <span className="font-medium text-white/80">{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solvency Note Section */}
      <section className="py-24 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Eyebrow>ONE THING WE CHECK</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-8">We Vet Installers Before We Start.</h2>
            <p className="text-dark-600 text-lg leading-relaxed mb-6 text-left">
              We run a basic solvency check before any engagement — Google reviews, BBB status, industry reputation. Not to be difficult. Our commission is tied to your installs. If an installer closes before a deal funds, we don't get paid.
            </p>
            <p className="text-dark-600 text-lg leading-relaxed text-left">
              We work with stable, established companies. 2+ years operating with a solid local reputation — you'll pass easily.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Ideal Partnership Section */}
      <section className="py-24 px-6 bg-light-bg border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Eyebrow>THE IDEAL PARTNERSHIP</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-8">Who Succeeds With Us?</h2>
            <p className="text-dark-600 text-lg leading-relaxed mb-6 text-left">
              The installers who see the highest ROI from our system don't treat us like a standard third-party vendor. They treat us like their internal reactivation department.
            </p>
            <p className="text-dark-600 text-lg leading-relaxed text-left">
              They provide quick feedback on appointments, keep us updated on financing changes, and trust our structured 10-touch process to do the heavy lifting. If you want a systematic, long-term partner to squeeze every dollar out of your CRM, let's talk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Think You're a Fit? Let's Find Out.</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Book a Free Lead Audit</Button>
            <Button to="/services" variant="ghost">See Our Services</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
