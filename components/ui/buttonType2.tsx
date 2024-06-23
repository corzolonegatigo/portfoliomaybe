import React from 'react'
import Link from 'next/link';

interface ButtonProps {
    className?: string;
    text: React.ReactNode;
    link?: string;
  }

  const ButtonType2: React.FC<ButtonProps> = ({  className, text, link }) => {

    const baseClasses = 'shadow-[inset_0_0_0_2px_#AB85D6] text-black px-12 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-purple-100 hover:text-black-100 dark:text-neutral-200 transition duration-200';
    return (
        <Link
            className={`${baseClasses} ${className}`}
            href={link || '/'}
        >
                {text}
        </Link>
    )
}


export default ButtonType2