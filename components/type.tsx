'use client';

import TypeIt, { TypeItProps } from 'typeit-react';

export const Type = ({ options, ...props }: TypeItProps) => {
  return (
    <TypeIt
      options={{ loop: false, cursorChar: '', speed: 5, ...options }}
      {...props}
    />
  );
};
