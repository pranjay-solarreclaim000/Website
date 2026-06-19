import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RevenueCalculator() {
  // Slider states with their defaults matching the video start
  const [leads, setLeads] = useState(300);
  const [reactivationRate, setReactivationRate] = useState(12); // in %
  const [closeRate, setCloseRate] = useState(30); // in %
  const [dealValue, setDealValue] = useState(25000); // in $
  const [commission, setCommission] = useState(4); // in %

  // Calculations (Updated to match step-by-step cascading formula for exact display consistency)
  const bookedAppts = Math.round(leads * (reactivationRate / 100));
  const closedDeals = Math.round(bookedAppts * (closeRate / 100));
  const revenueRecovered = closedDeals * dealValue;
  const reclaimFee = Math.round(revenueRecovered * (commission / 100));
  const netRevenue = Math.max(0, revenueRecovered - reclaimFee);

  // Return on fee multiplier
  const returnOnFee = commission > 0 ? Math.round(100 / commission) : 0;

  // Visual funnel bar scaling (Relative and progressive for ideal responsiveness)
  const leadsPercent = (leads - 50) / (3000 - 50); // Normalized leads percentage
  const reactivationPercent = (reactivationRate - 1) / (18 - 1); // Normalized reactivation percentage
  const closePercent = (closeRate - 10) / (40 - 10); // Normalized close rate percentage

  const bar1Width = 45 + leadsPercent * 55; // Scales from 45% to 100% of container width
  const bar2Width = bar1Width * (0.3 + reactivationPercent * 0.5); // Booked appointments bar width
  const bar3Width = bar2Width * (0.3 + closePercent * 0.5); // Closed installs bar width

  return (
    <section className="py-16 px-4 md:px-6 bg-neutral-50/50" id="roi-calculator">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Card Block (Dark Slate/Blue with Solar Details) */}
        <div className="bg-dark-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl border border-dark-700">
          {/* Subtle geometric background light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10 animate-fade-in">
            {/* Logo Row */}
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9 text-solar-500" />
              <span className="font-serif text-2xl tracking-tight text-white font-medium">SolarReclaim</span>
            </div>
            
            {/* Content headings */}
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Recover the revenue you <br className="hidden sm:block" /> already paid for.
            </h2>
            
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              The 30% federal residential solar tax credit ended December 31, 2025 — demand
              just got harder to win cold. Meanwhile, the aged and "dead" leads sitting in your
              CRM are already paid for. SolarReclaim re-engages them, books appointments,
              and you only pay on signed contracts. Use the calculator below to see what your
              cold list is worth.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 transition-colors border border-white/5 text-solar-500 uppercase tracking-widest">
                Texas & Florida focused
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 transition-colors border border-white/5 text-solar-500 uppercase tracking-widest">
                Performance-based fee
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 transition-colors border border-white/5 text-solar-500 uppercase tracking-widest">
                No raw ad spend
              </span>
            </div>
          </div>
        </div>

        {/* Sliders and Metrics Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Input/Sliders Card */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-8">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">Your numbers</h3>
              <p className="text-sm text-neutral-500">Drag the sliders to match your CRM and close metrics.</p>
            </div>

            <div className="space-y-6">
              
              {/* Slider 1: Dead Leads */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="leads-input" className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                    Dead / aged leads in CRM
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-600" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-neutral-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-50">
                        Total number of unworked/dead leads in CRM
                      </span>
                    </span>
                  </label>
                  <span className="text-lg font-bold text-neutral-900 font-mono">
                    {leads.toLocaleString()}
                  </span>
                </div>
                <input
                  id="leads-input"
                  type="range"
                  min="50"
                  max="3000"
                  step="10"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-solar-500 hover:accent-solar-600 transition-all"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium px-0.5">
                  <span>50</span>
                  <span>3,000</span>
                </div>
              </div>

              {/* Slider 2: Reactivation Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="reactivation-input" className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                    Reactivation rate
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-600" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-neutral-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-50">
                        % of leads converted to booked appointments
                      </span>
                    </span>
                  </label>
                  <span className="text-lg font-bold text-neutral-900 font-mono">
                    {reactivationRate}%
                  </span>
                </div>
                <input
                  id="reactivation-input"
                  type="range"
                  min="1"
                  max="18"
                  step="0.5"
                  value={reactivationRate}
                  onChange={(e) => setReactivationRate(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-solar-500 hover:accent-solar-600 transition-all"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium px-0.5">
                  <span>1%</span>
                  <span>18%</span>
                </div>
              </div>

              {/* Slider 3: Close Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="close-input" className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                    Appointment-to-close rate
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-600" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-neutral-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-50">
                        Conversion rate from appointment to signed install
                      </span>
                    </span>
                  </label>
                  <span className="text-lg font-bold text-neutral-900 font-mono">
                    {closeRate}%
                  </span>
                </div>
                <input
                  id="close-input"
                  type="range"
                  min="10"
                  max="40"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-solar-500 hover:accent-solar-600 transition-all"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium px-0.5">
                  <span>10%</span>
                  <span>40%</span>
                </div>
              </div>

              {/* Slider 4: Average Deal Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="deal-input" className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                    Average deal value
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-600" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-neutral-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-50">
                        Average gross pricing of residential solar system
                      </span>
                    </span>
                  </label>
                  <span className="text-lg font-bold text-neutral-900 font-mono">
                    ${dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="deal-input"
                  type="range"
                  min="10000"
                  max="45000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-solar-500 hover:accent-solar-600 transition-all"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium px-0.5">
                  <span>$10k</span>
                  <span>$45k</span>
                </div>
              </div>

              {/* Slider 5: SolarReclaim commission */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="commission-input" className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                    SolarReclaim commission
                    <span className="group relative cursor-pointer">
                      <HelpCircle className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-600" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-neutral-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-50">
                        Performance fee commission percentage per closed deal
                      </span>
                    </span>
                  </label>
                  <span className="text-lg font-bold text-neutral-900 font-mono">
                    {commission}%
                  </span>
                </div>
                <input
                  id="commission-input"
                  type="range"
                  min="3"
                  max="5"
                  step="0.25"
                  value={commission}
                  onChange={(e) => setCommission(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-solar-500 hover:accent-solar-600 transition-all"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium px-0.5">
                  <span>3%</span>
                  <span>5%</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Potentials and Outputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col h-full space-y-6 justify-between">
              
              <div>
                <h3 className="text-lg font-bold text-neutral-900 tracking-tight">Your recovery potential</h3>
                <p className="text-sm text-neutral-500">Updates live as you adjust your inputs.</p>
              </div>

              {/* Main Badge Block */}
              <div className="bg-[#101827] text-white p-6 md:p-8 rounded-2xl text-center border border-neutral-800 flex flex-col justify-center items-center shadow-lg">
                <div className="inline-flex py-1 px-3.5 bg-solar-500/10 border border-solar-500/25 rounded-full text-[10px] font-bold text-solar-500 tracking-widest uppercase mb-4">
                  Revenue Recovered
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight min-h-[50px] flex items-center justify-center">
                  ${revenueRecovered.toLocaleString()}
                </div>
                <div className="inline-flex py-1 px-4 border border-white/20 rounded-full text-xs font-semibold tracking-wide text-solar-500 bg-white/5 shadow-inner">
                  {returnOnFee}x return on fee
                </div>
              </div>

              {/* 2x2 Sub metrics grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Metric 1 */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mb-1">
                    Booked appointments
                  </div>
                  <div className="text-2xl font-bold text-neutral-800 font-mono">
                    {bookedAppts}
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mb-1">
                    Closed deals
                  </div>
                  <div className="text-2xl font-bold text-neutral-800 font-mono">
                    {closedDeals}
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mb-1">
                    Net revenue to you
                  </div>
                  <div className="text-lg font-bold text-dark-900 tracking-tight font-mono">
                    ${netRevenue.toLocaleString()}
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mb-1">
                    SolarReclaim fee
                  </div>
                  <div className="text-lg font-bold text-dark-900 tracking-tight font-mono">
                    ${reclaimFee.toLocaleString()}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section - Funnel Visualizer */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight">Your recovery funnel</h3>
            <p className="text-sm text-neutral-500">From cold leads to signed contracts - visualized live.</p>
          </div>

          <div className="space-y-5 pt-2 relative">
            {/* Funnel row 1: Dead leads */}
            <div className="space-y-1.5 relative z-10">
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-600">
                <span>Dead leads in CRM</span>
                <span className="font-mono">{leads.toLocaleString()}</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-8 overflow-hidden relative border border-neutral-200/50">
                <motion.div 
                  className="bg-neutral-400 h-full rounded-full flex items-center px-4"
                  animate={{ width: `${bar1Width}%` }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                >
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
                    Baseline CRM List (100%)
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Funnel row 2: Booked appointments */}
            <div className="space-y-1.5 relative z-10">
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-700">
                <span>Booked appointments</span>
                <span className="font-mono">{bookedAppts.toLocaleString()} ({reactivationRate}% booked)</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-8 overflow-hidden relative border border-neutral-200/50">
                <motion.div 
                  className="bg-neutral-700 h-full rounded-full flex items-center px-4"
                  animate={{ width: `${bar2Width}%` }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                >
                  {bar2Width > 18 && (
                    <span className="text-[10px] font-bold text-solar-500 uppercase tracking-widest whitespace-nowrap">
                      Appts Booked ({reactivationRate}%)
                    </span>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Funnel row 3: Closed installs */}
            <div className="space-y-1.5 relative z-10">
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-800">
                <span>Closed installs</span>
                <span className="font-mono">{closedDeals.toLocaleString()} ({closeRate}% closed)</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-8 overflow-hidden relative border border-neutral-200/50">
                <motion.div 
                  className="bg-solar-500 h-full rounded-full flex items-center px-4"
                  animate={{ width: `${bar3Width}%` }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                >
                  {bar3Width > 18 && (
                    <span className="text-[10px] font-bold text-dark-900 uppercase tracking-widest whitespace-nowrap">
                      Signed Installs
                    </span>
                  )}
                </motion.div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Banner Card: Yellow/Amber block to book */}
        <div className="bg-solar-500 rounded-3xl p-8 text-dark-900 tracking-tight flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold font-display">
              See exactly what your cold list could return.
            </h4>
            <p className="text-dark-900/80 text-sm font-medium">
              We'll review a sample of your aged leads and map a recovery plan — no commitment.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-dark-900 text-white rounded-xl font-bold hover:bg-black transition-all flex items-center gap-2 group whitespace-nowrap shadow-lg text-sm shrink-0"
          >
            Book a 10-minute pilot review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Disclaimer row */}
        <div className="text-center text-[10px] text-neutral-400 font-medium">
          *Illustrative benchmarks; actual results vary by list quality and context. © 2026 SolarReclaim — Dead-lead reactivation for residential solar installers.
        </div>

      </div>
    </section>
  );
}
