"use client";

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from "next/image";

const advocates = [
  {
    name: "Brian Livingston",
    role: "FOUNDER",
    description:
      "Recognized by the legendary Jim Cathcart and The Cathcart Institute as the only Certified Professional Expert in the world for his knowledge and 2 decades of experience in Traffic Court, Brian is dedicated to protecting Alberta drivers.",
    image: "/images/brian-founder.png",
    imageHeight: "15rem",
  },
  {
    name: "Jeremy Boese",
    role: "OWNER",
    description:
      "Jeremy, married for 22 years and a father of three children aged 19, 14, and 12, brings 18 years of diverse law enforcement experience. His career has spanned roles as a Prosecutor, Sheriff, Highway Patrol Officer, Community Peace Officer, and more.",
    image: "/images/jeremy-owner.png",
  },
];

type Advocate = (typeof advocates)[number];

function AdvocateCard({ advocate, index, className = "" }: { advocate: Advocate; index: number; className?: string }) {
  return (
    <article className={`flex h-full flex-col rounded-[24px] sm:rounded-[30px] border border-[#E3E6EE] bg-white px-4 sm:px-6 pb-6 sm:pb-8 pt-4 text-left shadow-[0_28px_65px_-38px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-[#EF4444] ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
        className="flex h-full flex-col"
      >
        <div className="-mx-6 -mt-4 flex items-center justify-center px-4 pt-4">
          <div className="relative h-[15rem] w-full overflow-hidden rounded-[16px] border border-[#E3E6EE] bg-[#F2F3F5] flex-shrink-0">
            <Image
              src={advocate.image}
              alt={advocate.name}
              width={240}
              height={240}
              className="h-full w-full object-contain object-top"
              loading="lazy"
              priority={false}
            />
          </div>
        </div>

        <h3 className="mt-4 text-[24px] sm:text-[28px] font-semibold leading-tight text-[#0F172A]">
          {advocate.name}
        </h3>
        <p className="mt-1 text-base sm:text-[18px] font-semibold uppercase tracking-[0.22em] text-[#E10B0A]">
          {advocate.role}
        </p>

        <p className="mt-3 sm:mt-4 flex-1 text-base sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#475569] font-normal">
          {advocate.description}
        </p>
      </motion.div>
    </article>
  );
}

function GuaranteeCard({ index, className = "" }: { index: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px', amount: 0.3 })
  
  return (
    <motion.article 
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ 
        y: -4, 
        boxShadow: '0 12px 40px rgba(239,68,68,0.3)',
        borderColor: '#EF4444',
        transition: { duration: 0.3 }
      }}
      className={`flex h-full flex-col rounded-[32px] border border-[#E7E9EE] bg-white px-6 py-7 text-left shadow-[0_22px_55px_-34px_rgba(239,68,68,0.22)] transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFE6E1] text-[#E10B0A]">
          <svg viewBox="0 0 22 22" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l8 3v6c0 5.25-3.5 9-8 9s-8-3.75-8-9V6l8-3z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          </svg>
        </span>
        <h3 className="text-[26px] font-semibold leading-tight text-[#E10B0A]">Our Guarantee</h3>
      </div>

      <p className="mt-4 text-[16px] leading-[26px] text-[#475569]">
        We&apos;re the first and only Traffic Ticket Defence Agency confident enough to guarantee our work on every
        ticket we fight.
      </p>

      <p className="mt-5 text-[16px] leading-[26px] text-[#475569]">
        If we can&apos;t improve the outcome of your ticket, we will:
      </p>

      <div className="mt-5 space-y-4">
        <div className="border-l-4 border-[#E10B0A] rounded-[16px] bg-[#FFF0EE] px-4 py-3">
          <div className="flex gap-3">
            <p className="text-[16px] leading-[26px] text-[#475569] font-normal">
              Pay the fine (up to the full value of our fee), or
            </p>
          </div>
        </div>
        <div className="border-l-4 border-[#E10B0A] rounded-[16px] bg-[#FFF0EE] px-4 py-3">
          <div className="flex gap-3">
            <p className="text-[16px] leading-[26px] text-[#475569] font-normal">
              Give you a full credit toward fighting a future ticket.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[16px] leading-[26px] italic text-[#000000]">
        No one can guarantee zero points, but you can feel confident knowing your investment is protected if we
        can&apos;t achieve a better result.
      </p>
    </motion.article>
  );
}

export default function AboutTheAgency() {
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section id="about" className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <motion.h2 
          className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-medium tracking-tight text-[#0F172A] px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Meet Your Advocates
        </motion.h2>
        <motion.p 
          className="mx-auto mt-3 sm:mt-4 max-w-3xl text-base sm:text-[15px] leading-6 sm:leading-7 text-[#475569] px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
        >
          At Traffic Ticket Guru, we go beyond fighting tickets. We stand beside you when you
          need support the most. We take the time to understand your situation, your concerns,
          and the real impact on your insurance, your record, and your peace of mind.
        </motion.p>

        <div className="mt-8 sm:mt-10 md:mt-12 grid gap-6 sm:gap-7 md:grid-cols-3">
          <AdvocateCard advocate={advocates[0]} index={0} className="order-1 md:order-1" />
          <GuaranteeCard index={1} className="order-3 md:order-2" />
          <AdvocateCard advocate={advocates[1]} index={2} className="order-2 md:order-3" />
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center px-4">
          <a
            href="tel:+17803805511"
            className="inline-flex items-center justify-center rounded-[14px] bg-[#E10B0A] h-[48px] sm:h-[52px] w-full sm:w-[200px] text-base sm:text-base font-semibold text-white shadow-[0_4px_14px_rgba(225,11,10,0.25)] hover:bg-[#c00a09] hover:shadow-[0_6px_20px_rgba(225,11,10,0.3)] transition-all duration-200 whitespace-nowrap"
          >
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
