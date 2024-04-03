import photo from '@/assets/photo-profil.jpg'

export function Resume() {
  return (
    <section className='flex flex-row  ' id='resume'>
      <div className='hero min-h-screen bg-base-200 '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={photo}
            className='max-w-sm rounded-lg shadow-2xl'
            alt='Photo de profil'
          />
          <div className='max-md:text-center'>
            <h1 className='text-5xl font-bold pb-4'>Tristan LEROY</h1>
            <h2 className='text-2xl font-bold'>Développeur Web Junior</h2>
            <p className='py-6'>
              Jeune développeur en reconversion, je cherche un poste dans une
              entreprise en tant que dev front junior. Je suis à la recherche
              d'une première expérience qui me permettra de faire mes preuves.
            </p>
            <a
              href='https://github.com/TristanLEROY'
              className='btn w-auto'
              target='blank'
            >
              <i className='fa-brands fa-github fa-lg'></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
