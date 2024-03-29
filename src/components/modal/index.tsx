export function Modal({
  img,
  alt,
  title,
  cardText,
  badges,
  linkGitHub,
  id,
}: {
  img: string
  alt: string
  title: string
  cardText: string
  badges: string[]
  linkGitHub: string
  id: string
}) {
  return (
    <dialog id={id} className='modal px-2 lg:mx-0'>
      <div className='modal-box lg:w-8/12 max-w-5xl w-full'>
        <img src={img} alt={alt} />
        <div>
          <div className='flex flex-rowf gap-4'>
            <h3 className='font-bold text-lg'>{title}</h3>
            <a href={linkGitHub} className='flex self-center' target='blank'>
              <i className='fa-brands fa-github fa-lg'></i>
            </a>
          </div>
          <p className='py-4'>{cardText}</p>
        </div>
        <div className='card-actions justify-end'>
          {badges.map((badge, index) => (
            <div className='badge badge-outline' key={index}>
              {badge}
            </div>
          ))}
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}
