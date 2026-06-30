"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 md:flex-row lg:px-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="flex-1"
        >
          <h1 className="inline-block rounded-md bg-[#FFF8C6] px-3 py-2 text-3xl font-extrabold leading-tight text-[#8FC3E8] md:text-4xl lg:text-5xl">
            Hello, I&apos;m Khalisah Almayra Putri. 👋
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-[#1F2430] md:text-xl lg:text-2xl"
          >
            A frontend developer and UI/UX designer passionate about crafting
            modern, responsive, and user-centered digital experiences. ✨
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            rotate: [0, 3, -3, 0],
            x: [0, 8, -8, 0],
            scale: 1,
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            scale: {
              duration: 0.8,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex w-full justify-center md:w-[42%]"
        >
          <Image
            src="/images/hi.jpeg"
            alt="Hero Illustration"
            width={450}
            height={450}
            priority
            className="h-auto w-[260px] object-contain md:w-[340px] lg:w-[420px]"
          />
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        className="mt-12 flex justify-center"
      >
        <button
          onClick={() =>
            document
              .getElementById("toolkit")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-[#8FC3E8]"
        >
          <svg
            className="animate-bounce"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 16 4 6h16z" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}