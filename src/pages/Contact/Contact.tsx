import React, { useState } from 'react'
import axios from 'axios'
import Notiflix from 'notiflix'
import { Footer } from '../../components'
import NavBar from '../../components/Navbar/NavBar'
import { useDocTitle } from '../../hooks/useDocTitle'
import './Contact.scss'

export const Contact: React.FC = () => {
  useDocTitle('WCP - Contact Us')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement
    submitBtn.disabled = true
    submitBtn.innerHTML = 'Loading...'

    const fData = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      fData.append(key, value)
    })

    axios({
      method: 'post',
      url: process.env.REACT_APP_CONTACT_API,
      data: fData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        submitBtn.disabled = false
        submitBtn.innerHTML = 'send message'
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        })
        Notiflix.Report.success('Success', response.data.message, 'Okay')
      })
      .catch((error) => {
        submitBtn.disabled = false
        submitBtn.innerHTML = 'send message'
        const { response } = error
        if (response.status === 500) {
          Notiflix.Report.failure('An error occurred', response.data.message, 'Okay')
        }
        if (response.data.errors) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <>
      <NavBar />
      <div className='contact'>
        <div className='contact__container' data-aos='zoom-in'>
          <form onSubmit={sendEmail} className='contact__form'>
            <div className='contact__form-content'>
              <h1 className='contact__title'>Send us a message</h1>
              <div className='contact__input-grid'>
                <div className='contact__input-wrapper'>
                  <input
                    name='firstName'
                    className='contact__input'
                    type='text'
                    placeholder='First Name*'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className='contact__error'>{errors.firstName}</p>}
                </div>
                <div className='contact__input-wrapper'>
                  <input
                    name='lastName'
                    className='contact__input'
                    type='text'
                    placeholder='Last Name*'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className='contact__error'>{errors.lastName}</p>}
                </div>
                <div className='contact__input-wrapper'>
                  <input
                    name='email'
                    className='contact__input'
                    type='email'
                    placeholder='Email*'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className='contact__error'>{errors.email}</p>}
                </div>
                <div className='contact__input-wrapper'>
                  <input
                    name='phone'
                    className='contact__input'
                    type='tel'
                    placeholder='Phone*'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className='contact__error'>{errors.phone}</p>}
                </div>
              </div>
              <div className='contact__textarea-wrapper'>
                <textarea
                  name='message'
                  placeholder='Message*'
                  className='contact__textarea'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className='contact__error'>{errors.message}</p>}
              </div>
              <div className='contact__button-wrapper'>
                <button type='submit' id='submitBtn' className='contact__submit-button'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className='contact__info'>
            <div className='contact__info-content'>
              <div className='contact__info-item'>
                <i className='fas fa-map-marker-alt contact__info-icon' />
                <div>
                  <h2 className='contact__info-title'>Office Address</h2>
                  <p className='contact__info-text'>Ilo Awela, Ota, Ogun State</p>
                </div>
              </div>
              <div className='contact__info-item'>
                <i className='fas fa-phone-alt contact__info-icon' />
                <div>
                  <h2 className='contact__info-title'>Call Us</h2>
                  <p className='contact__info-text'>Tel: 08055384406</p>
                </div>
              </div>
              <div className='contact__info-item'>
                <i className='fas fa-envelope contact__info-icon' />
                <div>
                  <h2 className='contact__info-title'>Send an E-mail</h2>
                  <p className='contact__info-text'>info@mld.ng</p>
                </div>
              </div>
              <div className='contact__social'>
                <a
                  href='https://www.facebook.com/ENLIGHTENEERING/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact__social-link'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='contact__social-icon'
                  >
                    <path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/company/enlighteneering-inc-'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact__social-link'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='contact__social-icon'
                  >
                    <circle cx='4.983' cy='5.009' r='2.188'></circle>
                    <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
