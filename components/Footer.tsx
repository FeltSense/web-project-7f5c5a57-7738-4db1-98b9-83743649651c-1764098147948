'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Case Studies', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#contact' },
        { name: 'Partners', href: '#contact' },
        { name: 'News', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#contact' },
        { name: 'Documentation', href: '#contact' },
        { name: 'Support', href: '#contact' },
        { name: 'API', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@gutcheck.com', href: 'mailto:hello@gutcheck.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-violet-600 rounded-xl p-2.5">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white font-['Sora']">GutCheck</span>
              </div>

              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                Empowering investors with data-driven insights and intuitive decision-making tools for smarter capital allocation.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors duration-300 group"
                  >
                    <div className="bg-slate-900 rounded-lg p-2 group-hover:bg-violet-600/10 transition-colors duration-300">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                {footerLinks.map((column, columnIndex) => (
                  <motion.div
                    key={columnIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                  >
                    <h3 className="text-white font-semibold font-['Sora'] text-sm uppercase tracking-wider mb-5">
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 border-t border-slate-900"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-white font-semibold font-['Sora'] text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-slate-400 text-sm">
                Get the latest insights on venture trends and market analysis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-3.5 transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-900">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-slate-500 text-sm"
            >
              © {new Date().getFullYear()} GutCheck. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-slate-900 hover:bg-violet-600 text-slate-400 hover:text-white rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-600/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <a href="#" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  )
}
