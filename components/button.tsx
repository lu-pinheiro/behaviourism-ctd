import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      className='bg-transparent border-white border-4 text-white p-4 rounded-sm text-xl hover:scale-105 transition-transform'
      {...props}
    />
  );
};
