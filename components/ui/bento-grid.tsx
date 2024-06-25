"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Button from "./button";
import { cn } from "@/utils/cn";


import { BackgroundGradientAnimation } from "./background-gradient-animations";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Typescript", "Python"];
  const rightLists = ["Video Editing", "Figma", "3D Modelling"];
  if (id === 1) { 
    const titleclass = ""
  } else {
    const titleclass = ""
  }
  const defaultOptions = {
  
  };


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation />
        )}

        {id === 2 && (
            <div className="flex gap-1 lg:gap-3 absolute w-full justify-end right-3 lg:-right-2">
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-2 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
  
        {/* {id == 3 && (
            <div className="absolute z-40 inset-0 flex items-center justify-end text-white font-bold px-12 gap-y-2 pointer-events-none text-3xl md:text-4xl lg:text-7xl pd-100 border-spacing-x-5">
                <span className="text-xs -ml-20">
                    <Button 
                    className="h-20 w-40" 
                    text={"Contact Me"}
                    classNameText="px-3 py-2 text-xl"
                    
                    ></Button>
                </span>
           </div>
       )} */}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
          >{id == 1 && (
            <div className="font-sans md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 font-semibold">
              {description}
            </div>
          )}
          {id != 1 && (
            <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
          )}
          
          {id == 2 && (
            <div
            className={`font-sans text-lg lg:text-3xl max-w-[15rem] font-bold z-10`}
          >
            {title}
          </div>
          )}
          {id != 2 && (
            <div
            className={`font-sans text-lg lg:text-3xl max-w-[30rem] font-bold z-10`}
          >
            {title}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
