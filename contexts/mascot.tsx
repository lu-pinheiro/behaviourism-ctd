'use client';
import { ReactNode, createContext, useContext, useRef, useState } from 'react';

interface MascotContextTypes {
  name: string;
  setName: (name: string) => void;
  life: number;
  damage: () => void;
  pulse: boolean;
}

const MascotContext = createContext<MascotContextTypes>(
  {} as MascotContextTypes,
);

export const MascotProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [name, setName] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.getItem('mascotName') ?? ''
      : '',
  );
  const [life, setLife] = useState(3);
  const [pulse, setPulse] = useState(false);

  const damage = () => {
    setLife(life => life - 1);
    setPulse(true);
    audioRef.current?.play();

    setTimeout(() => {
      setPulse(false);
    }, 3000);
  };

  return (
    <MascotContext.Provider value={{ name, setName, life, damage, pulse }}>
      <audio ref={audioRef} src='/sfx-punch.mp3' controls={false}></audio>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => useContext(MascotContext);
