export function Footer() {
  return (
    <section className='flex flex-col items-center p-8 bg-slate-900 text-white'>
      <div className='pb-6'>
        <a
          href='https://github.com/TristanLEROY'
          className='btn '
          target='blank'
        >
          <i className='fa-brands fa-github fa-lg'></i>
          GitHub
        </a>
      </div>
      <p>Copyright © Tristan LEROY</p>
    </section>
  )
}
