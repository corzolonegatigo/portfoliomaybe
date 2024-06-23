"use client";
import Image from "next/image";
import Main from "@/components/main";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Grid from "@/components/grid";
import Projects from "@/components/projecs";
import { navItems } from "@/data";
import Competitions from "@/components/competitions";
import Footer from "@/components/footer";
import ButtonType2 from "@/components/ui/buttonType2";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Main />
        <Grid />
        <Projects />
        <Competitions />
        <Footer />
      </div>
    </main>
  );
}
