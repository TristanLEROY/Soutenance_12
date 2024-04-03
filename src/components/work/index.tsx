import Argent from '@/assets/argent.png'
import Kasa from '@/assets/kasa.png'
import { Card } from '../card'

export function Work() {
  return (
    <section
      className='pb-16 gap-12 flex flex-col bg-green-400 bg-opacity-50'
      id='work'
    >
      <h2 className='text-3xl flex justify-center underline pt-12'>Travaux</h2>
      <div className='flex max-md:flex-col flex-row gap-20 justify-center items-center'>
        <Card
          img={Argent}
          alt='Site Argent Bank'
          title='Argent Bank'
          cardText="Site pour la gestion d'information bancaire et de creation."
          badges={['React', 'Tailwind', 'Pnpm', 'TypeScript']}
          linkGitHub='https://github.com/TristanLEROY/Soutenance_11'
          id='modalArgent'
        />

        <Card
          img={Kasa}
          alt='Site Kasa'
          title='Kasa'
          cardText='Site vitrine pour afficher des lieux de location de vacances.'
          badges={['React', 'Tailwind', 'Pnpm']}
          linkGitHub='https://github.com/TristanLEROY/Soutenance_8'
          id='modalKasa'
        />
      </div>
    </section>
  )
}
