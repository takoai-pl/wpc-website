import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'
import { HashLink } from 'react-router-hash-link'

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__grid'>
          <div className='footer__block footer__block--company'>
            <div className='footer__company-info'>
              <h3 className='footer__company-name'>MLD</h3>
              <div className='footer__company-address'>
                <h5>Molad e Konsult</h5>
                <p>Ilo Awela,</p>
                <p>Ota,</p>
                <p>Ogun State.</p>
              </div>
            </div>
          </div>

          <div className='footer__block footer__block--links'>
            <h6 className='footer__block-title'>LINKS</h6>
            <ul className='footer__link-list'>
              <li>
                <HashLink to='#' className='footer__link'>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink to='#' className='footer__link'>
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink to='#' className='footer__link'>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          <div className='footer__block footer__block--services'>
            <h6 className='footer__block-title'>OUR SERVICES</h6>
            <ul className='footer__link-list'>
              <li>
                <Link to='#' className='footer__link'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Domain and Hosting
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  General IT Consultations
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer__block footer__block--social'>
            <div className='footer__social-title'>Social Media Links</div>
            <div className='footer__social-subtitle'>Follow us on social media.</div>
            <ul className='footer__social-list'>
              <li>
                <Link to='#' className='footer__social-link' aria-label='Twitter'>
                  <svg
                    className='footer__social-icon'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z' />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__social-link' aria-label='Facebook'>
                  <svg
                    className='footer__social-icon'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__copyright'>
          <div className='footer__copyright-text'>
            Copyright &copy; {new Date().getFullYear()}{' '}
            <HashLink to='#' className='footer__copyright-link'>
              Molad e Konsult
            </HashLink>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
