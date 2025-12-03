'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function IRSSection() {
  return (
    <section id="irs" className="bg-[#F5F5F5] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-8 sm:mb-10 text-center">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium text-[#0F172A] mb-3 sm:mb-4 px-2">
            <span className="text-[#0F172A]">Immediate </span>
            <span className="text-[#E10B0A]">Roadside Suspension</span>
            <span className="text-[#0F172A]"> (IRS)</span>
          </h2>
          <p className="text-[16px] sm:text-base md:text-lg text-[#111827] max-w-4xl mx-auto px-4">
            Being charged under the Alberta SafeRoads Program can lead to immediate licence suspension, fines, counselling programs, and possible jail time.
          </p>
        </div>

        {/* TWO COLUMNS, EQUAL HEIGHT */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {/* LEFT: CARD */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <article className="h-full rounded-2xl sm:rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#0F172A] mb-4 sm:mb-6">
                  What You May Be Facing
                </h3>
                <ul className="space-y-3 text-[15px] md:text-base text-[#475569] mb-6">
                  <li className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-[#EF4444] flex-shrink-0" strokeWidth={2} />
                    <span className="font-normal">90-day licence suspension</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-[#EF4444] flex-shrink-0" strokeWidth={2} />
                    <span className="font-normal">Minimum $1,200 fine</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-[#EF4444] flex-shrink-0" strokeWidth={2} />
                    <span className="font-normal">Mandatory counselling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-[#EF4444] flex-shrink-0" strokeWidth={2} />
                    <span className="font-normal">Ignition interlock (1 year)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-[#EF4444] flex-shrink-0" strokeWidth={2} />
                    <span className="font-normal">Towing &amp; storage fees</span>
                  </li>
                </ul>
                <p className="text-[15px] md:text-base font-semibold text-[#0F172A]">
                  Don&apos;t delay. IRS cases move fast so must your defence.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)] transition-all duration-200 whitespace-nowrap"
                >
                  Contact Us Today!
                </a>
                <a
                  href="/on-road-suspension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[14px] border border-[#CBD5E1] h-[48px] sm:h-[52px] px-6 sm:px-8 text-base sm:text-base font-semibold text-[#0F172A] shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap bg-white"
                >
                  More About IRS
                </a>
              </div>
            </article>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="h-full min-h-[300px] sm:min-h-[400px] md:min-h-0">
              <img
                src="/images/irs-photo.jpg"
                alt="Police stopping a vehicle"
                className="w-full h-full rounded-2xl sm:rounded-3xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

