'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What Should I Do If I Receive a Traffic Ticket?',
      answer: 'If you receive a traffic ticket, it\'s important to act quickly. Contact us as soon as possible so we can review your case and help you understand your options. We can help you fight the ticket, potentially saving you money on fines, insurance premiums, and demerit points.',
    },
    {
      question: 'What If My Ticket Is From Out Of Town?',
      answer: 'We handle traffic tickets from across Ontario. Even if your ticket is from a different city or jurisdiction, we can still help you fight it. Our team has experience with various courts and jurisdictions throughout the province.',
    },
    {
      question: 'Can I Fight A Traffic Ticket From Out Of Country?',
      answer: 'Yes, we can help you fight traffic tickets even if you\'re from out of country. We understand the complexities of cross-border traffic violations and can guide you through the process.',
    },
    {
      question: 'How Long Does The Process Take?',
      answer: 'The timeline varies depending on the complexity of your case and court schedules. Typically, the process can take several weeks to a few months. We\'ll keep you informed throughout the entire process.',
    },
    {
      question: 'Do I Need To Attend Court?',
      answer: 'In most cases, you don\'t need to attend court. We can represent you and handle all proceedings on your behalf. We\'ll only ask you to attend if absolutely necessary.',
    },
  ]

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F2F3F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium text-[#0F172A] mb-3 sm:mb-4 px-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center bg-white transition-colors"
                whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
              >
                <span className="font-semibold text-secondary text-base sm:text-lg pr-2">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-body leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

