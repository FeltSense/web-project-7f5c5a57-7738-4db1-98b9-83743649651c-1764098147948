'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "GutCheck transformed how we evaluate investment opportunities. Their data-driven insights helped us identify winning startups before our competitors.",
    name: "Sarah Chen",
    role: "Managing Partner",
    company: "Sequoia Capital",
    avatar: "https://i.pravatar.cc/150?img=5",
    logo: "S"
  },
  {
    quote: "The due diligence process used to take weeks. With GutCheck's platform, we cut that down to days while making more confident decisions.",
    name: "Marcus Rodriguez",
    role: "Investment Director",
    company: "a16z",
    avatar: "https://i.pravatar.cc/150?img=12",
    logo: "a16z"
  },
  {
    quote: "GutCheck's predictive analytics gave us the edge we needed. We've increased our portfolio returns by 34% since partnering with them.",
    name: "Emily Thompson",
    role: "Chief Investment Officer",
    company: "Tiger Global",
    avatar: "https://i.pravatar.cc/150?img=9",
    logo: "TG"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Trusted by Leading Investors
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Top venture capital firms rely on GutCheck to make smarter investment decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-violet-50 rounded-xl mb-6">
                <span className="text-2xl font-bold text-violet-600">{testimonial.logo}</span>
              </div>

              <p className="text-slate-900 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-sm text-violet-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
