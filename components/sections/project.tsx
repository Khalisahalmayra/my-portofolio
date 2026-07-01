"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiFigma,
  SiReact,
} from "react-icons/si";

type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lapor Lingkungan",
    image: "/images/project1.jpeg",
    category: "Fullstack Web Application",
    description:
      "A web application for environmental reporting with an integrated admin dashboard.",

    fullDescription:
        "Lapor Lingkungan is a fullstack web application built from scratch to facilitate environmental issue reporting. As the Fullstack Developer and UI/UX Designer, I was responsible for project planning, designing the user interface in Figma, developing the frontend using Next.js and Tailwind CSS, building the backend API with Express.js, designing and managing the PostgreSQL database, implementing authentication, and deploying the application. The platform allows users to submit reports with images and location details, while administrators can efficiently monitor, verify, and manage incoming reports through a dedicated dashboard.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
    ],

    features: [
      "Authentication",
      "Upload Image",
      "Report Status",
      "Admin Dashboard",
      "Responsive Design",
      "User Profile",
    ],

    github: "https://github.com/khalisahalmayra/web-lapor-lingkungan",
    demo: "https://laporlingkungan.vercel.app",
  },

  {
    id: 2,
    title: "Vitara Sport",
    image: "/images/project2.jpg",
    category: "E-Commerce Website",

    description:
      "Modern sports equipment e-commerce website using React and REST API.",

    fullDescription:
      "Vitara Sport is an online sports equipment store designed with a clean and modern interface. The website consumes data from an external REST API and focuses on creating a smooth shopping experience with product browsing, filtering, responsive layouts, and attractive UI animations.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],

    features: [
      "Product Catalog",
      "Categories",
      "Product Detail",
      "Responsive Layout",
      "REST API Integration",
    ],

    github: "https://github.com/username/vitara",
    demo: "https://vitara.vercel.app",
  },

  {
    id: 3,
    title: "GroovyCare",
    image: "/images/project3.jpg",
    category: "UI/UX Design",

    description:
      "A skincare e-commerce UI designed entirely in Figma.",

    fullDescription:
      "GroovyCare is a modern skincare shopping interface designed in Figma. The project focuses on visual hierarchy, clean layouts, user-friendly navigation, and a soft pastel color palette to provide an elegant shopping experience.",

    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
    ],

    features: [
      "Homepage",
      "Product Page",
      "Checkout",
      "Responsive Design",
      "Prototype",
    ],

    github: "",
    demo: "https://www.figma.com/design/9bclGLMPomsrE5qqnhK585/Groovycare?node-id=0-1&t=C84QYxvzLUlJyDQK-1",
  },

  {
    id: 4,
    title: "Portfolio Website",
    image: "/images/project4.png",
    category: "Frontend Website",

    description:
      "Personal portfolio website showcasing projects, skills, and achievements.",

    fullDescription:
      "A personal portfolio built using Next.js and Tailwind CSS featuring smooth animations, responsive layouts, achievements, contact form integration, and project showcase.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Dark Animation",
      "Responsive",
      "Project Showcase",
      "Achievements",
      "Contact Form",
    ],

    github: "https://github.com/khalisahalmayra/my-portofolio",
    demo: "https://khalisahalmayra.vercel.app",
  },

  {
    id: 5,
    title: "Spin The ToD",
    image: "/images/project5.jpg",
    category: "UI/UX Design",

    description:
        "A modern UI/UX design for a spinning wheel game application created in Figma.",

    fullDescription:
        "Spin Tod is a UI/UX design project created in Figma for a digital spinning wheel game application. The design focuses on delivering a fun, colorful, and intuitive user experience with modern layouts, engaging interactions, and responsive interfaces. From wireframing to high-fidelity prototypes, every screen was designed to provide an enjoyable and seamless experience for users.",

    technologies: [
        "Figma",
        "UI Design",
        "UX Design",
        "Prototype",
    ],

    features: [
        "User Flow",
        "Wireframe",
        "High-Fidelity Design",
        "Interactive Prototype",
        "Responsive Layout",
        "Design System",
    ],

    github: "",
    demo: "https://www.figma.com/design/WEnkCdJTQ7IJOnUo63Pr6v/Spin-The-ToD?node-id=20-34&t=8hGZsaLr3eBVyPom-1",
},
{
  id: 6,
  title: "Pusat Literasi Starbhak",
  image: "/images/project6.jpeg",
  category: "Fullstack Web Application",

  description:
    "A digital literacy platform developed to manage books, reading activities, and user access within the school.",

  fullDescription:
    "Pusat Literasi Starbhak is a fullstack web application developed to support digital literacy activities at SMKS Taruna Bhakti. As the Fullstack Developer and UI/UX Designer, I was responsible for the entire development process, including project planning, UI/UX design in Figma, frontend development using Next.js and Tailwind CSS, backend API development with Express.js, PostgreSQL database design and management, authentication, testing, and deployment. The application provides features for managing digital books, organizing literacy activities, monitoring user participation, and simplifying administration through an intuitive dashboard.",

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "MySQL",
  ],

  features: [
    "Authentication",
    "Book Management",
    "Reading Activities",
    "User Dashboard",
    "Admin Dashboard",
    "Responsive Design",
  ],

  github: "https://github.com/khalisahalmayra/perpuss-starbhak",
  demo: "https://literasi-starbhak.vercel.app/",
},
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
            My Project
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#1F2430]">
            A showcase of personal and open-source projects I have built or
            contributed to.
          </p>

          <div className="mt-8 flex gap-3 overflow-hidden">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={`h-1 w-24 rounded-full ${
                  index % 2 === 0
                    ? "bg-[#9FC7EF]"
                    : "bg-[#FFF8C6]"
                }`}
              />
            ))}
          </div>

          <p className="mt-8 text-2xl font-bold text-[#1F2430]">
            Total: {PROJECTS.length}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="overflow-hidden rounded-[28px] border-2 border-[#A9CDEF] bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="group relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => setSelected(project)}
                    className="rounded-full bg-white px-8 py-3 font-semibold transition hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full bg-[#FFF8C6] px-3 py-1 text-sm font-medium text-[#8A845F]">
                  {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#1F2430]">
                  {project.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies
                    .slice(0, 3)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#9FC7EF] px-4 py-2 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

            {/* ================= Modal ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-white"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#9FC7EF] text-2xl font-bold text-white transition hover:rotate-90"
              >
                ×
              </button>

              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                {/* Left */}
                <div className="bg-[#F8FAFC] p-6 lg:p-8">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    width={1200}
                    height={800}
                    className="w-full rounded-2xl border border-gray-200 shadow-lg"
                  />

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        className="flex items-center gap-3 rounded-full bg-[#1F2430] px-6 py-3 font-semibold text-white transition hover:scale-105"
                      >
                        <FaGithub />
                        Github
                      </a>
                    )}

                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        className="flex items-center gap-3 rounded-full bg-[#9FC7EF] px-6 py-3 font-semibold text-[#1F2430] transition hover:scale-105"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right */}
                <div className="p-8 lg:p-10">
                  <span className="rounded-full bg-[#FFF8C6] px-4 py-2 text-sm font-semibold text-[#8A845F]">
                    {selected.category}
                  </span>

                  <h2 className="mt-5 text-4xl font-extrabold text-[#1F2430]">
                    {selected.title}
                  </h2>

                  <p className="mt-6 text-base leading-8 text-gray-600">
                    {selected.fullDescription}
                  </p>

                  {/* Technology */}
                  <h3 className="mt-10 text-xl font-bold text-[#1F2430]">
                    Technologies
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#9FC7EF] px-5 py-2 font-medium text-[#1F2430]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <h3 className="mt-10 text-xl font-bold text-[#1F2430]">
                    Key Features
                  </h3>

                  <div className="mt-4 grid gap-3">
                    {selected.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3"
                      >
                        <div className="h-3 w-3 rounded-full bg-[#9FC7EF]" />

                        <span className="font-medium text-[#1F2430]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                                    {/* Divider */}
                  <div className="my-10 h-[2px] w-full rounded-full bg-[#E8EEF5]" />

                  {/* Project Info */}
                  <div className="grid gap-5">
                    <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-5 py-4">
                      <span className="font-semibold text-[#666]">
                        Project Type
                      </span>

                      <span className="font-bold text-[#1F2430]">
                        {selected.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-5 py-4">
                      <span className="font-semibold text-[#666]">
                        Technologies
                      </span>

                      <span className="font-bold text-[#1F2430]">
                        {selected.technologies.length}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-5 py-4">
                      <span className="font-semibold text-[#666]">
                        Features
                      </span>

                      <span className="font-bold text-[#1F2430]">
                        {selected.features.length}
                      </span>
                    </div>
                  </div>

                  {/* Tech Icons */}
                  <div className="mt-10">
                    <h3 className="mb-5 text-xl font-bold text-[#1F2430]">
                      Built With
                    </h3>

                    <div className="flex flex-wrap gap-4">
                      {selected.technologies.includes("React") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <FaReact className="text-3xl text-sky-500" />
                        </div>
                      )}

                      {selected.technologies.includes("Next.js") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <SiNextdotjs className="text-3xl" />
                        </div>
                      )}

                      {selected.technologies.includes("TypeScript") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <SiTypescript className="text-3xl text-blue-600" />
                        </div>
                      )}

                      {selected.technologies.includes("Tailwind CSS") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <SiTailwindcss className="text-3xl text-cyan-500" />
                        </div>
                      )}

                      {selected.technologies.includes("Express.js") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <SiExpress className="text-3xl" />
                        </div>
                      )}

                      {selected.technologies.includes("PostgreSQL") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <SiPostgresql className="text-3xl text-blue-700" />
                        </div>
                      )}

                      {selected.technologies.includes("Node.js") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <FaNodeJs className="text-3xl text-green-600" />
                        </div>
                      )}

                      {selected.technologies.includes("Figma") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                          <SiFigma className="text-3xl text-pink-500" />
                        </div>
                      )}

                      {selected.technologies.includes("React Native") && (
                        <div className="rounded-full bg-[#EAF6FF] p-4">
                            <TbBrandReactNative className="text-3xl text-sky-500" />
                        </div>
                        )}
                    </div>
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