import React from 'react'
import { Img } from '../Img'

interface ClientLogo {
  src: string
  alt: string
}

const clientLogos: ClientLogo[] = [
  { src: 'kws.png', alt: 'KWS logo' },
  { src: 'protergia.png', alt: 'Protergia logo' },
  { src: 'geps.png', alt: 'GEPS logo' },
]

export const Clients: React.FC = () => {
  return (
    <section className='clients'>
      <div className='clients__container'>
        <section className='clients__content' data-aos='fade-up'>
          <div className='clients__header'>
            <h2 className='clients__title'>Our Clients</h2>
            <div className='clients__title-underline'></div>
            <h2 className='clients__subtitle'>Some of our clients.</h2>
          </div>
          <div className='clients__logo-container' data-aos='fade-in' data-aos-delay='600'>
            <div className='clients__logo-grid'>
              {clientLogos.map((logo) => (
                <div key={logo.src} className='clients__logo-wrapper'>
                  <Img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
