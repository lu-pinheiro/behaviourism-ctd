import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <h1 className='text-2xl md:text-6xl' {...rest}>
      {children}
    </h1>
  );
};
