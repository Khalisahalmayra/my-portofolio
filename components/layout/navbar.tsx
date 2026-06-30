"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={72}
            height={72}
            priority
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 rounded-full border-2 border-[#A9D0F5] bg-white/80 px-10 py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`border-b-2 pb-1 text-lg font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? "border-[#6FB6E0]"
                    : "border-transparent hover:border-[#6FB6E0]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <Link
          href="/contact"
          className="rounded-full border-2 border-[#A9D0F5] bg-white/80 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:bg-[#EEF8FF]"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}