import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = (props: InputProps) => {
  return <input className='p-4 rounded text-black bg-slate-100' {...props} />;
};
