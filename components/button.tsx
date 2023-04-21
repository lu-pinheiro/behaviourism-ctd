import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-transparent border-white border-4 font-bold uppercase text-white p-4 rounded-sm text-xl hover:scale-105 transition-transform ${className}`}
      {...props}
    />
  );
};
