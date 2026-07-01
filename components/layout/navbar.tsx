"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#EAF3FB] bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:h-24 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={70}
            height={70}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 rounded-full border-2 border-[#A9D0F5] bg-white/80 px-10 py-3 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`border-b-2 pb-1 text-lg font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? "border-[#6FB6E0] text-[#6FB6E0]"
                    : "border-transparent hover:border-[#6FB6E0]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact */}
        <Link
          href="/contact"
          className="hidden rounded-full border-2 border-[#A9D0F5] bg-white/80 px-8 py-3 text-lg font-semibold transition hover:bg-[#EEF8FF] lg:block"
        >
          Contact
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 lg:hidden"
        >
          {open ? (
            <X size={30} color="#6FB6E0" />
          ) : (
            <Menu size={30} color="#6FB6E0" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#EAF3FB] bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col px-6 py-5">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-lg font-semibold transition ${
                    pathname === link.href
                      ? "bg-[#EEF8FF] text-[#6FB6E0]"
                      : "hover:bg-[#F7FBFF]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border-2 border-[#A9D0F5] px-4 py-3 text-center text-lg font-semibold transition hover:bg-[#EEF8FF]"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}