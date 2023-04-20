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
      className={`fixed ${
        direction === 'right' ? 'right-4' : 'left-4'
      } top-0 h-screen rounded-full hover:bg-slate-600/50 p-4 lg:p-10 flex items-center transition-colors`}
      {...props}
    >
      {direction === 'right' ? <ArrowRight /> : <ArrowLeft />}
    </Link>
  );
};
