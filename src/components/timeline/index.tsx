export function Timeline() {
  return (
    <section className='bg-green-400 bg-opacity-50'>
      <h2 className='text-3xl flex justify-center underline pt-12'>
        Expérience
      </h2>
      <ul className='timeline timeline-vertical py-12 '>
        <li>
          <div className='timeline-start timeline-box flex flex-col'>
            <span>Baccalauréat </span>
            <span className='text-xs text-gray-700'>
              Filiaire Scientifique spé SVT
            </span>
          </div>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end timeline-box flex flex-col'>
            <span>Customer Coach </span>
            <span className='text-xs text-gray-700'>
              Gestion de demande Client
            </span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-start timeline-box flex flex-col'>
            <span>Développeur Web </span>
            <span className='text-xs text-gray-700'>
              Reconversion via OpenClassrooms
            </span>
          </div>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <hr />
        </li>
      </ul>
    </section>
  )
}
