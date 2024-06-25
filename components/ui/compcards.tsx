"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const handleClick = () => {
    setPaused(!paused);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-40 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      onClick={handleClick}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-6 w-max h-[40rem] flex-nowrap",
          start && "animate-scroll",
          paused && "[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn("w-[90vw] max-w-full relative rounded-2xl border border-b-4 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[40vw] flex flex-col items-center",
            pauseOnHover && "transition-transform hover:scale-105 hover:cursor-pointer"
            )}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote className="flex flex-col items-center justify-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-10 items-center justify-center">
                {item.quote && (
                  <img
                    src={item.quote}
                    alt={item.quote}
                    className={cn(item.quote, "item-center object-contain")}
                  />
                )}
              </span>
              <div className="relative z-20 mt-6 flex flex-row">
                <span className="flex flex-col gap-1">
                  <span className="text-3xl font-bold leading-[1.6] text-white items-center text-center">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
