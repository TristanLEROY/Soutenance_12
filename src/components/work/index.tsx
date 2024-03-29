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
        {/* <div className='card w-96 bg-base-100 shadow ease-in transform hover:scale-105 transition duration-250 cursor-pointer hover:shadow-xl'>
          <figure>
            <img src={Kasa} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Kasa</h2>
            <p>Site vitrine pour afficher des lieux de location de vacances.</p>
            <div className='card-actions justify-end'>
              <div className='badge badge-outline'>React</div>
              <div className='badge badge-outline'>Tailwind</div>
              <div className='badge badge-outline'>Pnpm</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
