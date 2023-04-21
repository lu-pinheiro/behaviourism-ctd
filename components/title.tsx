import React from 'react';

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1 className={`text-4xl md:text-6xl ${className}`} {...rest}>
      {children}
    </h1>
  );
};
