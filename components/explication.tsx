import React from 'react';
import { Mascot } from './mascot';

export const Explication = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className='p-4 flex gap-6'>
      {children}
      <Mascot />
    </footer>
  );
};
