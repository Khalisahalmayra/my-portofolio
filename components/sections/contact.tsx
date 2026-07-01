"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_lo2pa3a",
        "template_8wqhfta",
        form.current,
        "yq7m8BFAPyH80THh6"
      )
      .then(() => {
        setLoading(false);

        setSuccess(true);

        form.current?.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);

        alert("Failed to send message.");
      });
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-32 lg:px-0">

      <div className="grid gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="inline-block rounded-md bg-[#FFF8C6] px-3 py-2 text-3xl font-extrabold text-[#8FC3E8]">
            Let's Connect!
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#1F2430]">
            Thank you for visiting my portfolio.
            If you have any questions,
            project opportunities,
            collaborations,
            or simply want to say hello,
            feel free to contact me through the form
            or any of my social media platforms below.
          </p>

            {/* Social Media */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="https://instagram.com/khlisahalmyra"
              target="_blank"
              className="rounded-full border-2 border-[#9FC7EF] p-4 text-3xl text-[#8FC3E8] transition hover:-translate-y-2 hover:bg-[#9FC7EF] hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/Khalisah-Ayra"
              target="_blank"
              className="rounded-full border-2 border-[#9FC7EF] p-4 text-3xl text-[#8FC3E8] transition hover:-translate-y-2 hover:bg-[#9FC7EF] hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/khalisahalmyra"
              target="_blank"
              className="rounded-full border-2 border-[#9FC7EF] p-4 text-3xl text-[#8FC3E8] transition hover:-translate-y-2 hover:bg-[#9FC7EF] hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              className="rounded-full border-2 border-[#9FC7EF] p-4 text-3xl text-[#8FC3E8] transition hover:-translate-y-2 hover:bg-[#9FC7EF] hover:text-white"
            >
              <FaTelegramPlane />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 rounded-[30px] border-2 border-[#9FC7EF] bg-white p-8 shadow-xl"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border-2 border-[#D8ECFB] px-5 py-4 outline-none transition focus:border-[#8FC3E8]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border-2 border-[#D8ECFB] px-5 py-4 outline-none transition focus:border-[#8FC3E8]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl border-2 border-[#D8ECFB] px-5 py-4 outline-none transition focus:border-[#8FC3E8]"
            />

            <textarea
              rows={7}
              name="message"
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-xl border-2 border-[#D8ECFB] px-5 py-4 outline-none transition focus:border-[#8FC3E8]"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#9FC7EF] px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#7DB7E7]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </motion.div>

      </div>

          {/* Success Popup */}

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -40,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed right-6 top-24 z-50"
          >
            <div className="rounded-2xl border-2 border-[#9FC7EF] bg-white px-6 py-5 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9FC7EF] text-2xl text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-[#1F2430]">
                    Message Sent!
                  </h3>

                  <p className="text-sm text-gray-600">
                    Thank you for contacting me.
                    I'll reply as soon as possible.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    );
    }