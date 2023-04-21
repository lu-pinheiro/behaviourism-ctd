'use client';
import { ReactNode, createContext, useContext, useRef, useState } from 'react';

interface MascotContextTypes {
  name: string;
  setName: (name: string) => void;
  life: number;
  pulse: boolean;
  damage: () => void;
  reset: () => void;
}

const MascotContext = createContext<MascotContextTypes>(
  {} as MascotContextTypes,
);

export const MascotProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [name, setMascotName] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.getItem('mascotName') ?? ''
      : '',
  );
  const [life, setLife] = useState(3);
  const [pulse, setPulse] = useState(false);

  const damage = () => {
    setLife(life => life - 1);
    setPulse(true);
    audioRef.current?.pause();
    if (typeof audioRef.current?.currentTime !== 'undefined')
      audioRef.current.currentTime = 0;
    audioRef.current?.play();

    setTimeout(() => {
      setPulse(false);
    }, 3000);
  };

  const setName = (name: string) => {
    setMascotName(name);
    localStorage.setItem('mascotName', name);
  };

  const reset = () => {
    setName('');
    setLife(3);
  };

  return (
    <MascotContext.Provider
      value={{ name, setName, life, damage, pulse, reset }}
    >
      <audio ref={audioRef} src='/sfx-punch.mp3' controls={false}></audio>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => useContext(MascotContext);
