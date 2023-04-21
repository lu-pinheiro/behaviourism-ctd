import React, { HtmlHTMLAttributes } from 'react';

interface ParagraphProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return (
    <p className='text-left text-lg my-4' {...rest}>
      {children}
    </p>
  );
};
