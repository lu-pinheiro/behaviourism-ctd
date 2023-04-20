import Link from 'next/link';
import { Title } from '@/components/title';
import { TeamMember } from '@/components/team-member';
import { Button } from '@/components/button';

export default async function Credits() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-6 p-4 md:p-24 bg-slate-800 text-white'>
      <Title>Créditos</Title>
      <div className='flex flex-wrap justify-around gap-12'>
        <TeamMember
          imageUrl='https://pps.whatsapp.net/v/t61.24694-24/293615550_2847792225517062_5497415724639594175_n.jpg?ccb=11-4&oh=01_AdTmu7whY4YQ0ICMVNcrJ5fBSfRtId3T5UFuwkEVcWIdZw&oe=644DBA41'
          name='Larissa'
        />
        <TeamMember
          imageUrl='https://pps.whatsapp.net/v/t61.24694-24/308681898_101939122683106_368818628051724018_n.jpg?ccb=11-4&oh=01_AdR2YU0rEkDlYSDKr0Xt7t4-yoonIptYHsUIlvYMIQ8R6w&oe=644DD16D'
          name='Luisa'
        />
        <TeamMember
          imageUrl='https://pps.whatsapp.net/v/t61.24694-24/321231648_719782852829488_8658496356208403814_n.jpg?ccb=11-4&oh=01_AdSL9Qhry8fy7q4jXkShEI6TAOYBUplLNj-p79DdfmBjyQ&oe=644DBA00'
          name='Victor Kauan'
        />
        <TeamMember
          imageUrl='https://pps.whatsapp.net/v/t61.24694-24/295201735_940791773987706_4590151373238948075_n.jpg?ccb=11-4&oh=01_AdQwntSUpbMZcZXSPyGSWK55i4DzGOi1CfL0PJBWLlWaMA&oe=644DC69B'
          name='Wesley'
        />
        <TeamMember
          imageUrl='https://pps.whatsapp.net/v/t61.24694-24/322461930_132763079430082_3768444590899719714_n.jpg?ccb=11-4&oh=01_AdRF6D9Wa0nmm7pKt1fmhuGIHvrQoW8-HPnscwC1y-0GIw&oe=644DA626'
          name='Willian'
        />
      </div>
      <div className='flex justify-between items-center gap-6'>
        <Link href='/'>
          <Button>Página inicial</Button>
        </Link>
        <Button>Referências</Button>
      </div>
    </main>
  );
}
