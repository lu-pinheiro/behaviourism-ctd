'use client';
import { setMaxPage } from '@/utils/set-max-page';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

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

let timeoutId: string | number | NodeJS.Timeout | undefined;

const randomAudio = () => Math.floor(Math.random() * (3 - 1 + 1)) + 1;
const audioNumber = randomAudio();

export const MascotProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [name, setMascotName] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.getItem('mascotName') ?? ''
      : '',
  );
  const [life, setLife] = useState(3);
  const [pulse, setPulse] = useState(false);

  const playAudio = async () => {
    const audioNumber = randomAudio();
    audioRef.current?.pause();
    if (
      typeof audioRef.current?.currentTime !== 'undefined' &&
      typeof audioRef.current?.src !== 'undefined'
    ) {
      audioRef.current.setAttribute('src', `/mascot-angry-${audioNumber}.mp3`);
      audioRef.current.currentTime = 0;
    }
    audioRef.current?.load();
    await audioRef.current?.play();
  };

  const damage = () => {
    clearTimeout(timeoutId);
    setLife(life => life - 1);
    setPulse(true);
    playAudio();
    timeoutId = setTimeout(() => {
      setPulse(false);
    }, 2000);
  };

  const setName = (name: string) => {
    setMascotName(name);
    localStorage.setItem('mascotName', name);
  };

  const reset = () => {
    setLife(3);
  };

  useEffect(() => {
    if (life < 1) {
      setMaxPage('/scene/1');
      setMaxPage('/question/0');
    }
  }, [life]);

  return (
    <MascotContext.Provider
      value={{ name, setName, life, damage, pulse, reset }}
    >
      <audio
        ref={audioRef}
        src={`/mascot-angry-${audioNumber}.mp3`}
        preload={`/mascot-angry-${audioNumber}.mp3`}
        controls={false}
      >
        <source src='/mascot-angry-1.mp3' type='mp3' />
        <source src='/mascot-angry-2.mp3' type='mp3' />
        <source src='/mascot-angry-3.mp3' type='mp3' />
      </audio>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => useContext(MascotContext);
