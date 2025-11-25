'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-violet-50 text-violet-600 px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Zap className="w-4 h-4" />
              <span>Trusted by 500+ VCs & Funds</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white font-['Sora']"
            >
              Make smarter investment decisions
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
            >
              GutCheck combines real-time market data, AI-powered analytics, and expert insights to help venture capital firms identify winning opportunities before the competition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300"
              >
                View Pricing
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-400">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-400">$2.4B+ Tracked</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-white text-sm font-semibold">Portfolio Analytics</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-violet-50 rounded-xl p-4">
                    <div className="text-slate-600 text-xs font-medium mb-1">Active Deals</div>
                    <div className="text-2xl font-bold text-slate-900">127</div>
                    <div className="text-emerald-600 text-xs font-semibold mt-1">+12% MoM</div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <div className="text-slate-600 text-xs font-medium mb-1">Portfolio Value</div>
                    <div className="text-2xl font-bold text-slate-900">$2.4B</div>
                    <div className="text-emerald-600 text-xs font-semibold mt-1">+24% YoY</div>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600">Deal Flow Trends</span>
                    <span className="text-xs text-emerald-600 font-semibold">↑ 18.2%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-20 text-xs text-slate-600">Q1 2024</div>
                      <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-violet-600 h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="w-12 text-xs text-slate-900 font-semibold text-right">65</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 text-xs text-slate-600">Q2 2024</div>
                      <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-violet-600 h-full rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <div className="w-12 text-xs text-slate-900 font-semibold text-right">78</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 text-xs text-slate-600">Q3 2024</div>
                      <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <div className="w-12 text-xs text-slate-900 font-semibold text-right">92</div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-600 mb-3">Top Opportunities</div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">TechCo AI</div>
                        <div className="text-xs text-slate-500">Series B • $45M</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-emerald-600">95/100</div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">FinFlow</div>
                        <div className="text-xs text-slate-500">Series A • $12M</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-emerald-600">89/100</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Risk Score</div>
                  <div className="text-xl font-bold text-slate-900">A+</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Alert Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-violet-600 rounded-xl shadow-lg p-4 max-w-[180px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-xs font-semibold">New Alert</span>
              </div>
              <p className="text-white text-xs opacity-90">3 deals match your criteria</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
