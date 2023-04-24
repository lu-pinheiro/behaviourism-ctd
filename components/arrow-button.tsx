'use client';
import { setMaxPage } from '@/utils/set-max-page';
import Link, { LinkProps } from 'next/link';
import { ArrowLeft, ArrowRight } from 'react-feather';

interface ButtonProps extends LinkProps {
  direction: 'right' | 'left';
  nextPage?: string;
}

export const ArrowButton = ({ nextPage, direction, ...props }: ButtonProps) => {
  return (
    <Link
      onClick={() => {
        if (typeof nextPage === 'string' && nextPage.length > 0)
          setMaxPage(nextPage);
      }}
      className={`animate__animated fixed ${
        direction === 'right'
          ? 'right-0 md:right-4 animate__fadeInRight'
          : 'left-0 md:left-4 animate__fadeInLeft'
      } top-0 h-screen rounded-full hover:bg-slate-600/50 p-4 lg:p-10 flex items-center transition-colors`}
      {...props}
    >
      {direction === 'right' ? <ArrowRight /> : <ArrowLeft />}
    </Link>
  );
};
