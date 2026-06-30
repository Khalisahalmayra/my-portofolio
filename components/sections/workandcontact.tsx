"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkAndContact() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-0">
      <h2 className="inline-block rounded-md bg-[#FDF6C5] px-3 py-2 text-3xl font-extrabold text-[#8FC3E8]">
        What I&apos;m Working
      </h2>

      <p className="mt-8 text-justify text-lg leading-9 text-[#1F2430]">
        I design and build modern web and mobile applications with a focus on
        intuitive UI/UX and responsive frontend development. From wireframes
        and prototypes in Figma to fully functional interfaces using React,
        Next.js, and React Native, I enjoy transforming ideas into engaging,
        accessible, and user-centered digital experiences.
      </p>

      {/* Card */}
      <div className="mt-14 rounded-[28px] bg-[linear-gradient(270deg,#A9CDEF,#F2E9A8,#A9CDEF)] bg-[length:200%_200%] p-[2px] [animation:border-move_5s_linear_infinite]">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[26px] bg-white px-10 py-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1F2430]">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={36}
                height={36}
              />
              Let&apos;s work together!
            </h3>

            <p className="mt-4 text-justify text-lg leading-8 text-[#1F2430]">
              I am open to freelance projects. Feel free to contact me if you
              have an idea, a collaboration opportunity, or a project that we
              can build together.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="rounded-full border-2 border-[#9FC7EF] px-8 py-4 text-lg font-semibold text-[#1F2430] transition-all duration-300 hover:bg-[#EEF7FD]"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
}