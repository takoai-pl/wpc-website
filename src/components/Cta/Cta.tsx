import React from 'react'
import { Link } from 'react-router-dom'
import './Cta.scss'

export const Cta: React.FC = () => {
  return (
    <section className='cta'>
      <div className='cta__container'>
        <div className='cta__content'>
          <div className='cta__text-container'>
            <p className='cta__title'>Are you ready to scale your business?</p>
            <p className='cta__subtitle'>
              Get in touch and let us build something amazing{' '}
              <span className='cta__subtitle-highlight'>together!</span>
            </p>
          </div>

          <div className='cta__button-container'>
            <Link to='/contact' className='cta__button'>
              Send a message
              <svg
                className='cta__button-icon'
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
    </section>
  )
}
