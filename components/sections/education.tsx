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
      <h2 className="inline-block rounded-md bg-[#FDF6C5] px-3 py-2 text-2xl font-extrabold text-[#8FC3E8] sm:text-3xl">
        My Education
      </h2>

      <div className="relative mt-12">
        {/* Timeline */}
        <div className="absolute left-5 top-4 bottom-4 w-2 rounded-full bg-[#A9CDEF] sm:left-8 sm:w-3" />

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
              <div className="absolute left-[8px] z-10 h-7 w-7 rounded-full border-[3px] border-[#8A845F] bg-[#FFF8C6] sm:left-[18px] sm:h-8 sm:w-8" />

              {/* Card */}
              <div
                className="
                  ml-14 w-full
                  rounded-[24px]
                  border-2 border-[#A9CDEF]
                  bg-white
                  px-5 py-6
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-2xl

                  sm:ml-20
                  sm:px-8
                  sm:py-7
                "
              >
                <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
                  <Image
                    src={edu.logo}
                    alt={edu.school}
                    width={90}
                    height={90}
                    className="h-16 w-16 object-contain sm:h-[90px] sm:w-[90px]"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-[#1F2430] sm:text-2xl">
                      {edu.school}
                    </h3>

                    <p className="mt-2 text-base text-[#1F2430] sm:text-lg">
                      {edu.level}
                    </p>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                      {edu.year} • {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}