"use client";
import Image from "next/image";
import AllProjects from "@/components/projectsFull";
import Link from "next/link";
import ButtonType2 from "@/components/ui/buttonType2";

    
export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <h1 className='heading lg:max-w-[45vw] pt-[10rem]'>
            <span className='text-purple' >Competitions </span> I joined
        </h1>
    </main>
  );
}
