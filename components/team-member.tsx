import Image from 'next/image';

interface TeamMemberProps {
  imageUrl: string;
  name: string;
}

export const TeamMember = ({ imageUrl, name }: TeamMemberProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <Image
        className='border-slate-600 border-8'
        src={imageUrl}
        width={400}
        height={400}
        alt={`${name}`}
      />
      <p className='text-center text-2xl'>{name}</p>
    </div>
  );
};
