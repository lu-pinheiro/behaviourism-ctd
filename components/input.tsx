import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = (props: InputProps) => {
  return (
    <input
      className='input input-bordered input-lg w-full max-w-xs p-4 rounded text-black bg-slate-100'
      {...props}
    />
  );
};
