import { Modal } from '../modal'

export function Card({
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
  const openModal = () => {
    ;(
      document.getElementById(id) as HTMLElement & { showModal: () => void }
    )?.showModal()
  }
  return (
    <>
      <div
        className='card w-96 bg-base-100 shadow ease-in transform hover:scale-105 transition duration-250 cursor-pointer hover:shadow-xl'
        onClick={openModal}
      >
        <figure>
          <img src={img} alt={alt} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{cardText}</p>
          <div className='card-actions justify-end'>
            {badges.map((badge, index) => (
              <div className='badge badge-outline' key={index}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        img={img}
        alt={alt}
        title={title}
        cardText={cardText}
        badges={badges}
        linkGitHub={linkGitHub}
        id={id}
      />
    </>
  )
}
