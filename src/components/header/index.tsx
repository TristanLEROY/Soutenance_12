export function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>TRISTAN LEROY</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href='#resume'>Présentation</a>
          </li>
          <li>
            <a href='#work'>Travaux</a>
          </li>
          <li>
            <a href='#skill'>Compétence</a>
          </li>
          <li>
            <a>CV</a>
          </li>
          <li>
            <a href='https://github.com/TristanLEROY' target='blank'>
              <i className='fa-brands fa-github fa-lg'></i>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
