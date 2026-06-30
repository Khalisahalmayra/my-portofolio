"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Achievement = {
  id: number;
  image: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  description: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    image: "/images/certificate1.png",
    title: "Basic Web Programming",
    issuer: "Dicoding Indonesia",
    date: "6 September 2024",
    skills: ["HTML", "CSS"],
    description:
      "Successfully completed the Basic Web Programming course from Dicoding Indonesia. Learned HTML, CSS, responsive layouts, and web fundamentals.",
  },
  {
    id: 2,
    image: "/images/certificate2.jpg",
    title: "Kunjungan Industri PT Inti Persero & Institut Teknologi Bandung",
    issuer: "SMKS Taruna Bhakti",
    date: "8 Januari 2025",
    skills: [],
    description:
      "Successfully participated in an industrial visit to PT INTI (Persero) and Institut Teknologi Bandung (ITB), exploring technology, innovation, and the implementation of software engineering in professional industries."
    },
    {
    id: 3,
    image: "/images/certificate3.jpg",
    title: "Aplikasi Web E-commerce Sederhana",
    issuer: "SMKS Taruna Bhakti",
    date: "26 Juni 2025",
    skills: ["React", "JavaScript", "RestAPI"],
    description:
      "Completed the competency assessment in Software Engineering covering frontend development, JavaScript, and RestAPI implementation.",
  },
  {
    id: 4,
    image: "/images/certificate4.jpg",
    title: "Pengambangan Aplikasi Multi-Platform",
    issuer: "SMKS Taruna Bhakti",
    date: "22 Juni 2026",
    skills: ["PostgreSQL", "Next.js", "Express.js", "React Native"],
    description:
      "Built fullstack web and mobile applications using modern technologies including Next.js, Express.js, PostgreSQL, and React Native.",
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 pt-36 pb-20 lg:px-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block rounded-md bg-[#FFF8C6] px-3 py-2 text-3xl font-extrabold text-[#8FC3E8]">
            My Achievements
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#1F2430]">
            A collection of certificates and badges I have earned throughout my
            professional and academic journey.
          </p>

          <div className="mt-8 flex gap-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={`h-1 w-24 rounded-full ${
                  index % 2 === 0 ? "bg-[#9FC7EF]" : "bg-[#FFF8C6]"
                }`}
              />
            ))}
          </div>

          <p className="mt-8 text-2xl font-bold text-[#1F2430]">
            Total: {ACHIEVEMENTS.length}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="overflow-hidden rounded-[28px] border-2 border-[#A9CDEF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              {/* IMAGE */}
              <div className="group relative h-64 overflow-hidden rounded-[22px] m-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => setSelected(item)}
                    className="rounded-full bg-white px-8 py-3 font-semibold transition hover:scale-105"
                  >
                    Show Details
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pb-5">
                <h3 className="text-2xl font-bold text-[#1F2430]">
                  {item.title}
                </h3>

                <p className="mt-1 text-lg">{item.issuer}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#9FC7EF] px-4 py-2 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-8 text-base text-gray-600">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

        {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[30px] bg-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#9FC7EF] text-2xl font-bold text-white transition hover:rotate-90"
              >
                ×
              </button>

        <div className="grid md:grid-cols-[1.3fr_1fr]">
        {/* Left */}
        <div className="flex items-center justify-center bg-[#F8FAFC] p-6">
            <Image
            src={selected.image}
            alt={selected.title}
            width={900}
            height={600}
            className="h-auto w-full rounded-2xl border border-gray-200 object-contain shadow-md"
            />
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center p-10">
            <h2 className="text-3xl font-extrabold text-[#1F2430]">
            {selected.title}
            </h2>

            <p className="mt-2 text-xl font-medium text-[#555]">
            {selected.issuer}
            </p>

            <p className="mt-6 text-base leading-8 text-[#444]">
            {selected.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
            {selected.skills.map((skill) => (
                <span
                key={skill}
                className="rounded-full bg-[#9FC7EF] px-5 py-2 font-medium text-[#1F2430]"
                >
                {skill}
                </span>
            ))}
            </div>

            <div className="mt-10 rounded-xl bg-[#FFF8C6] px-5 py-4">
            <p className="font-semibold text-[#1F2430]">
                📅 {selected.date}
            </p>
        </div>
    </div>
</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
     </>
  );
}