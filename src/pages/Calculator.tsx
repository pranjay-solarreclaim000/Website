import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Eyebrow } from '../components/Layout';
import RevenueCalculator from '../components/RevenueCalculator';

export default function Calculator() {
  useEffect(() => {
    document.title = "SolarReclaim | Interactive Lead Reactivation ROI Calculator";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Calculate your potential recovered revenue, booked appointments, and closed installs from your dead lead list using our performance-based model."
    );
  }, []);

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/75 to-dark-900 z-10" />
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2670&auto=format&fit=crop"
            alt="Sleek modern solar architecture"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-20">
          <FadeIn>
            <Eyebrow className="bg-white/10 border-white/20 text-white">
              ROI CALCULATOR
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Interactive ROI Calculator
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Adjust the sliders below to match your database numbers and projected sales rates to see what your cold leads are actually worth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Calculator Body Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn delay={0.1}>
            <RevenueCalculator />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
