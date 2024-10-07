import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import './NavBar.scss'
import NavLinks from './NavLinks'

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <HashLink smooth to='/#hero'>
            <h1 className='navbar__title'>WPC</h1>
          </HashLink>
        </div>
        <div className='navbar__menu'>
          <button type='button' className='navbar__toggle' onClick={toggleMenu}>
            <svg
              className='navbar__toggle-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              )}
            </svg>
          </button>
          <div className='navbar__links navbar__links--desktop'>
            <NavLinks />
          </div>

          <div
            className={`navbar__links navbar__links--mobile ${
              isMenuOpen ? 'navbar__links--open' : ''
            }`}
          >
            <div className='navbar__links-container'>
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
