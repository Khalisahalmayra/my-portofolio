"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-0">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
        {/* Left - Image */}
        <motion.div
            initial={{
                opacity: 0,
                x: -40,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0],
                rotate: [-2, 2, -2],
                scale: [1, 1.02, 1],
            }}
            transition={{
                opacity: {
                duration: 0.7,
                },
                x: {
                duration: 0.7,
                },
                y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                },
                rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                },
                scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                },
            }}
            className="flex w-full justify-center lg:w-1/2"
            >
          <Image
            src="/images/me.png"
            alt="About Me"
            width={500}
            height={500}
            priority
            className="h-auto w-full max-w-[430px] object-contain"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="inline-block rounded-md bg-[#FDF6C5] px-3 py-2 text-3xl font-extrabold text-[#8FC3E8]">
            About Me
          </h2>

          <div className="mt-8 space-y-8 text-justify text-lg leading-9 text-[#1F2430]">
            <p>
              Hello, I'm <strong>Khalisah Almayra Putri</strong>, a Frontend
              Developer and UI/UX Designer based in Depok, West Java,
              Indonesia. I'm passionate about crafting modern digital
              experiences through thoughtful design and clean, maintainable
              code.
            </p>

            <p>
              I specialize in building responsive web applications using React,
              Next.js, TypeScript, and Tailwind CSS, while also designing
              intuitive user interfaces in Figma and developing cross-platform
              mobile applications with React Native (Expo). I enjoy
              transforming ideas into functional, user-friendly products and
              continuously learning new technologies to create meaningful
              digital solutions.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#9FC7EF] px-10 py-4 text-lg font-semibold text-[#1F2430] transition-all duration-300 hover:bg-[#EEF7FD]"
            >
              See My CV
            </a>

            <a
              href="/cv.pdf"
              download
              className="rounded-full border-2 border-[#9FC7EF] px-10 py-4 text-lg font-semibold text-[#1F2430] transition-all duration-300 hover:bg-[#EEF7FD]"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}