import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow, Button } from '../components/Layout';
import { CheckCircle2, ArrowRight, Zap, ShieldCheck, Target } from 'lucide-react';

export default function HowItWorks() {
  useEffect(() => {
    document.title = "The Recovery System | SolarReclaim";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Discover the psychological framework and 10-touch system SolarReclaim uses to turn dead CRM leads into committed appointments.");
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&w=2560&auto=format&fit=crop"
            alt="Solar infrastructure"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              THE PSYCHOLOGY OF RECOVERY
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              We Don't Just Call Leads. <br />We Shift Perspectives.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Most reactivation attempts fail because they ask for the appointment too early. We use a psychological journey to move leads from "Not Interested" to "Committed."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Psychology Journey */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <Eyebrow>THE FRAMEWORK</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-6">The Path to Commitment</h2>
            <p className="text-dark-600 text-lg max-w-3xl mx-auto">
              We replace generic checklists with the NEPQ (Neuro-Emotional Persuasion Questioning) framework. Here is how we move your dead leads back into your calendar.
            </p>
          </FadeIn>

          <div className="grid gap-8">
            {[
              {
                phase: "Phase 1: The Pattern Interrupt",
                goal: "Lower Resistance",
                desc: "The first touch isn't a pitch—it's a pattern interrupt. We avoid 'salesy' language and instead ask questions that acknowledge their current reality, immediately lowering the lead's natural defense mechanisms.",
                icon: Zap
              },
              {
                phase: "Phase 2: The Situation Audit",
                goal: "Establish Reality",
                desc: "We establish the current facts of their home and utility costs. By getting the lead to describe their situation, they begin to subconsciously admit the gaps in their current energy setup.",
                icon: Target
              },
              {
                phase: "Phase 3: The Problem Gap",
                goal: "Create Emotional Tension",
                desc: "This is where the magic happens. We use 'pain questions' to make the lead feel the cost of inaction. We don't tell them they're losing money—we let them realize it themselves.",
                icon: ShieldCheck
              },
              {
                phase: "Phase 4: The Solution Bridge",
                goal: "Sustain Value",
                desc: "Once the pain is felt, we position the appointment not as a 'sales call,' but as the logical solution to the problem they just identified. The appointment becomes the value, not the hurdle.",
                icon: CheckCircle2
              }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 bg-solar-50 rounded-2xl flex items-center justify-center shrink-0">
                  <step.icon className="w-7 h-7 text-solar-500" />
                </div>
                <div>
                  <div className="text-solar-500 font-bold uppercase tracking-widest text-xs mb-2">{step.goal}</div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">{step.phase}</h3>
                  <p className="text-dark-600 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Operational Engine */}
      <section className="py-24 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <Eyebrow>THE EXECUTION</Eyebrow>
            <h2 className="font-display text-4xl font-bold text-dark-900 mb-4">The 10-Touch Recovery Engine.</h2>
            <p className="text-dark-600 text-lg max-w-2xl">
              The psychology only works if the execution is flawless. We deploy a 35-day cadence across three channels to ensure no lead is left behind.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-light-bg p-8 rounded-2xl border border-neutral-200">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-500 rounded-full" /> SMS Strategy
              </h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Short, curiosity-driven messages designed to get a "Yes" or "No" response. We avoid long paragraphs that look like spam.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-light-bg p-8 rounded-2xl border border-neutral-200">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-500 rounded-full" /> Manual Dialing
              </h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                No auto-dialers. We use live specialists who can adapt the NEPQ flow in real-time based on the lead's emotional state.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-light-bg p-8 rounded-2xl border border-neutral-200">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-500 rounded-full" /> Email Sequence
              </h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Value-heavy emails focusing on utility rate hikes and $0-down financing, providing a professional anchor for our calls.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-dark-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Plug the Leaks in Your CRM?</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button to="/contact">Run Your Free Audit</Button>
            <Button to="/services" variant="ghost">See Our Services</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
