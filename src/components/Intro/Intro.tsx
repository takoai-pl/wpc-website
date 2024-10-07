import React from 'react'
import { Link } from 'react-router-dom'
import { Img } from '../Img'
import './Intro.scss'

export const Intro: React.FC = () => {
  return (
    <div className='intro' id='about'>
      <div className='intro__container' data-aos='fade-up'>
        <div className='intro__image-container'>
          <Img src='Web-developer.svg' />
        </div>
        <div className='intro__content' data-aos='zoom-in' data-aos-delay='500'>
          <h3 className='intro__title'>
            We develop high quality bespoke web and mobile applications for organizations,
            institutions and SMEs
          </h3>
          <p className='intro__description'>
            Our team is well vast in software development and is ready to help develop the
            applications of your choice.
          </p>
          <p className='intro__description'>
            We take responsibility for building custom software solutions that caters for automation
            of your business processes and improve efficiency.
          </p>
          <Link to='/contact' className='intro__cta-button'>
            Contact us
            <svg
              className='intro__cta-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
