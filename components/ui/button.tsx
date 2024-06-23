"use client";
import React from 'react'
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface ButtonProps {
  className?: string;
  classNameAll?: string;
  classNameText?: string;
  text: React.ReactNode;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ classNameAll, classNameText, className, text, link }) => {

    const baseClasses = 'relative inline-flex overflow-hidden rounded-md focus:outline-none p-[2px] focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform hover:scale-105';
    const textBaseClasses = 'animate-shimmer transition-colors inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_150%] font-medium text-white backdrop-blur-3xl'
    const insideBaseClasses = "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]";
    return (
        <Link
            className={`${baseClasses} ${className} ${classNameAll}`}
            href={link || '/'}
        >
            <span className={`${insideBaseClasses} ${classNameAll}`} />
            <span className={`${textBaseClasses} ${classNameText} `} >
                {text}
            </span>
        </Link>
    )
}

export default Button
