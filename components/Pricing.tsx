'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const features = [
    {
      category: 'Investment Analysis',
      items: [
        { name: 'Due Diligence Reports', included: true },
        { name: 'Market Sizing & TAM Analysis', included: true },
        { name: 'Competitive Landscape Mapping', included: true },
        { name: 'Financial Model Review', included: true },
        { name: 'Risk Assessment Framework', included: true },
      ],
    },
    {
      category: 'Portfolio Management',
      items: [
        { name: 'Real-time Portfolio Tracking', included: true },
        { name: 'Performance Analytics', included: true },
        { name: 'Cap Table Management', included: true },
        { name: 'Investor Updates & Reporting', included: true },
        { name: 'Exit Planning Tools', included: true },
      ],
    },
    {
      category: 'Deal Flow',
      items: [
        { name: 'Startup Screening & Sourcing', included: true },
        { name: 'Pitch Deck Analysis', included: true },
        { name: 'Founder Background Checks', included: true },
        { name: 'Network Introductions', included: true },
        { name: 'Co-investment Opportunities', included: true },
      ],
    },
    {
      category: 'Support & Services',
      items: [
        { name: 'Dedicated Investment Analyst', included: true },
        { name: 'Quarterly Strategy Sessions', included: true },
        { name: 'Priority Support (24hr response)', included: true },
        { name: 'Custom Research Requests', included: true },
        { name: 'Industry Expert Network Access', included: true },
      ],
    },

  
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Enterprise-Grade Investment Intelligence
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to make confident investment decisions. One comprehensive platform, unlimited potential.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-20"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-50 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-4">
                Professional Access
              </h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-slate-900">$29</span>
                <span className="text-slate-500 ml-2">/month</span>
              </div>
              <p className="text-slate-500">Early access pricing - Lock in now</p>
            </div>

            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md mb-8"
            >
              Pre-Order Now - $29
            </button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-slate-600">Full platform access</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-slate-600">Unlimited deal analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-slate-600">Dedicated analyst support</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-slate-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-6 px-8 text-slate-900 font-semibold text-lg">
                    What's Included
                  </th>
                  <th className="text-center py-6 px-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-50 rounded-xl">
                      <Check className="w-6 h-6 text-violet-600" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <motion.tr
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td colSpan={2} className="py-8 px-8">
                      <h4 className="text-slate-900 font-semibold text-base mb-4">
                        {category.category}
                      </h4>
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between py-2"
                          >
                            <span className="text-slate-600">{item.name}</span>
                            <div className="ml-4">
                              {item.included ? (
                                <div className="w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center">
                                  <Check className="w-3 h-3 text-emerald-400" />
                                </div>
                              ) : (
                                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                                  <X className="w-3 h-3 text-slate-400" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-6">
            Join 500+ investment professionals already using GutCheck
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-sm text-slate-600">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-sm text-slate-600">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-sm text-slate-600">Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
