import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp } from 'lucide-react';

export default function RevenueCalculator() {
  const [leads, setLeads] = useState(300);

  // Industry benchmarks used for calculation
  const bookingRate = 0.07; // 7%
  const showRate = 0.66;    // 66%
  const closeRate = 0.21;   // 21%
  const avgDealValue = 20000;

  const appointments = Math.round(leads * bookingRate);
  const shows = Math.round(appointments * showRate);
  const closes = Math.round(shows * closeRate);
  const recoveredRevenue = closes * avgDealValue;

  return (
    <section className="py-24 px-6 bg-dark-900 text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-solar-500 font-bold uppercase tracking-widest text-xs">Interactive Audit</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Calculate Your <span className="text-solar-500">Hidden Revenue.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Most installers are sitting on a goldmine of dead leads. Use our industry benchmarks to see exactly how much revenue is leaking from your CRM every month.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium text-white/70 uppercase tracking-wider">
                    Total Aged Leads in CRM
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="100"
                      value={leads}
                      onChange={(e) => setLeads(parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-solar-500"
                    />
                    <span className="text-3xl font-display font-bold text-solar-500 min-w-[100px]">{leads}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-dark-800 p-8 md:p-12 rounded-3xl border border-dark-700 shadow-2xl relative z-10">
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="text-white/40 text-xs uppercase tracking-widest">Proj. Appts</div>
                  <div className="text-3xl font-display font-bold text-white">{appointments}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/40 text-xs uppercase tracking-widest">Proj. Shows</div>
                  <div className="text-3xl font-display font-bold text-white">{shows}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/40 text-xs uppercase tracking-widest">Proj. Installs</div>
                  <div className="text-3xl font-display font-bold text-white">{closes}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/40 text-xs uppercase tracking-widest">Close Rate</div>
                  <div className="text-3xl font-display font-bold text-white">21%</div>
                </div>
              </div>

              <div className="bg-solar-500/10 border border-solar-500/20 rounded-2xl p-8 text-center">
                <div className="text-solar-500 font-bold uppercase tracking-widest text-sm mb-2">Estimated Recovered Revenue</div>
                <div className="text-6xl font-display font-bold text-white mb-4">
                  ${recoveredRevenue.toLocaleString()}
                </div>
                <p className="text-white/50 text-sm italic">
                  Based on an average install value of $20k and industry-standard recovery rates.
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
