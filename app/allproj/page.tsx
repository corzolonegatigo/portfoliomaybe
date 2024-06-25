"use client";
import Image from "next/image";
import AllProjects from "@/components/projectsFull";
import Link from "next/link";
import ButtonType2 from "@/components/ui/buttonType2";

    
export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

        <h1 className='heading lg:max-w-[45vw] pt-[10rem]'>
            All <span className='text-purple' >Projects </span> 
        </h1>
        < AllProjects/>
        <ButtonType2
                className="h-[4.5rem] w-[20rem] text-center items-center justify-center pt-[1.4rem] text-xl" 
                link="/"
                text="Return Home"
                />
        <h1 className='heading text-black-100'>
                filler filler filler filler filler filler filler filler filller filler filler filler filler filler filler filler
            </h1>
    </main>
  );
}
