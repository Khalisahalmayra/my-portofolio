import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Toolkit from "@/components/sections/toolkit";
import WorkAndContact from "@/components/sections/workandcontact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Toolkit />
      <WorkAndContact />
    </main>
  );
}