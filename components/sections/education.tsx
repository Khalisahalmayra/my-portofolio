"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EDUCATIONS = [
  {
    logo: "/images/sd.png",
    school: "SDN 011 Batu Ampar",
    level: "Primary School • Primary School",
    year: "2015 - 2021",
    location: "Jakarta Timur, Indonesia",
  },
  {
    logo: "/images/mts.png",
    school: "MTSS Alhidayah Sukatani",
    level: "Middle School • Middle School",
    year: "2021 - 2024",
    location: "Depok, Indonesia",
  },
  {
    logo: "/images/smk.png",
    school: "SMKS Taruna Bhakti",
    level: "High School • Software Engineering",
    year: "2024 - 2027",
    location: "Depok, Indonesia",
  },
];

export default function Education() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-0">
      {/* Title */}
      <h2 className="inline-block rounded-md bg-[#FDF6C5] px-3 py-2 text-3xl font-extrabold text-[#8FC3E8]">
        My Education
      </h2>

      <div className="relative mt-12">
        {/* Timeline */}
        <div className="absolute left-8 top-4 bottom-4 w-3 rounded-full bg-[#A9CDEF]" />

        <div className="space-y-8">
          {EDUCATIONS.map((edu, index) => (
            <motion.div
                key={edu.school}
                initial={{
                    opacity: 0,
                    x: -60,
                    scale: 0.95,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    y: [0, -6, 0],
                }}
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                transition={{
                    opacity: {
                    duration: 0.6,
                    delay: index * 0.3,
                    },
                    x: {
                    duration: 0.6,
                    delay: index * 0.3,
                    },
                    scale: {
                    duration: 0.6,
                    delay: index * 0.3,
                    },
                    y: {
                    duration: 3 + index,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: index * 0.3,
                    },
                }}
                className="relative flex items-center"
                >
              {/* Dot */}
              <div className="absolute left-[18px] z-10 h-8 w-8 rounded-full border-[3px] border-[#8A845F] bg-[#FFF8C6]" />

              {/* Card */}
              <div
                className="ml-20 flex w-full items-center gap-8 rounded-[24px]
                border-2 border-[#A9CDEF] bg-white px-8 py-7
                transition-all duration-500
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-2xl"
                >
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  width={90}
                  height={90}
                  className="object-contain"
                />

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2430]">
                    {edu.school}
                  </h3>

                  <p className="mt-1 text-lg text-[#1F2430]">
                    {edu.level}
                  </p>

                  <p className="mt-2 text-base text-gray-600">
                    {edu.year} • {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}