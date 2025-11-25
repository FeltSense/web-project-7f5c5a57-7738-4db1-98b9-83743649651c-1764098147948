'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Zap, Target } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Real-time data analytics and market insights to validate your investment thesis before you commit capital.'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive due diligence frameworks that identify red flags and hidden opportunities in every deal.'
    },
    {
      icon: Zap,
      title: 'Deal Flow',
      description: 'Curated pipeline of vetted opportunities matched to your investment criteria and portfolio strategy.'
    },
    {
      icon: Target,
      title: 'Portfolio Analytics',
      description: 'Track performance, benchmark returns, and optimize your allocation across all investments in one dashboard.'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Investment Intelligence, Simplified
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Make smarter investment decisions with data-driven insights and institutional-grade analytics.
          </p>
        </motion.div>

        {/* Circular UI Layout - Central hub with radiating features */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"
          >
            <div className="w-32 h-32 rounded-full bg-violet-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">GutCheck</span>
            </div>
          </motion.div>

          {/* Radiating Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  {/* Circular Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-violet-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}
