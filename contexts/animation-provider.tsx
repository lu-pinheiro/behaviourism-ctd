'use client';
import { useEffect, ReactNode } from 'react';
import AOS from 'aos';

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return <>{children}</>;
};
