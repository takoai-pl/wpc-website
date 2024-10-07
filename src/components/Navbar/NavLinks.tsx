import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './NavLinks.scss'

const NavLinks: React.FC = () => {
  return (
    <>
      <HashLink className='nav-link nav-link--standard' smooth to='/#about'>
        About
      </HashLink>
      <HashLink className='nav-link nav-link--standard' smooth to='/#services'>
        Services
      </HashLink>
      <HashLink className='nav-link nav-link--standard' to='/'>
        Portfolio
      </HashLink>
      <HashLink className='nav-link nav-link--standard' to='/contact#contact'>
        Contact Us
      </HashLink>
      <HashLink className='nav-link nav-link--cta' smooth to='/get-demo#demo'>
        Demo our products
      </HashLink>
    </>
  )
}

export default NavLinks
