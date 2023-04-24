import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export const Confetti = () => {
  const { width, height } = useWindowSize();

  return (
    <div
      className='overflow-hidden min-h-screen w-full max-w-[100vw] fixed top-0 left-0 pointer-events-none'
      style={{
        zIndex: 9999,
      }}
    >
      <ReactConfetti
        className='max-w-[100vw] fixed top-0 left-0'
        width={width}
        height={height}
      />
    </div>
  );
};
