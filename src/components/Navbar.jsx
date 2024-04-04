import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {faBars}
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
function Navbar() {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentHam, setHam] = useState(false)
  const handleHamIcon = () => {
    setHam(!currentHam)



  }
  useEffect(() => {
    const ham = document.querySelector('.ham-icon')

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 300) {
          setCurrentSection(section.id);

          // console.log(typeof section.id)
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ham.removeEventListener('click', handleHamIcon)
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log(currentSection)
  return (
    <>
      <nav className='sticky top-0 left-0 w-full z-50'>
        <div className='flex bg-black justify-between px-4 md:px-16 py-5 '>
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className='anchor_nav hidden md:flex text-white gap-20 text-normal relative'>
            <li className='relative'><a href="#home" className={`nav-link `}>Home <span className={currentSection === 'home' ? 'active' : ''}></span></a></li>
            <li className='relative'><a href="#about" className={`text-hover-gradient nav-link`}>About<span className={currentSection === 'about' ? 'active' : ''}></span></a> </li>
            <li className='relative'><a href="#project" className={`text-hover-gradient nav-link `}>Project<span className={currentSection === 'project' ? 'active' : ''}></span></a> </li>
            <li className='relative'><a href="#pricing" className={`text-hover-gradient nav-link `}>Pricing<span className={currentSection === 'pricing' ? 'active' : ''}></span></a> </li>
            <li className='relative'><a href="#blog" className={`text-hover-gradient nav-link `}>Blog<span className={currentSection === 'blog' ? 'active' : ''}></span></a></li>
          </ul>
          <ul className='gap-6 hidden md:flex'>
            <li><FontAwesomeIcon icon={faFacebookF} className='text-white cursor-pointer' /></li>
            <li><FontAwesomeIcon icon={faInstagram} className='text-white cursor-pointer' /></li>
            <li><FontAwesomeIcon icon={faTwitter} className='text-white cursor-pointer' /></li>
          </ul>
          <ul className='gap-6 flex md:hidden ham-icon'>
            <li><FontAwesomeIcon icon={faBars} className='text-white cursor-pointer text-2xl' onClick={handleHamIcon} /></li>
          </ul>


        </div>
        {currentHam && (
          <div className='bg-black px-4 hamburger-menu '>
            <ul className='anchor_nav  text-white gap-20 text-normal '>
              <li className='relative'><a href="#home" className={`nav-link`}>Home </a></li>
              <li className='relative'><a href="#about" className={`nav-link`}>About</a> </li>
              <li className='relative'><a href="#project" className={` nav-link `}>Project</a> </li>
              <li className='relative'><a href="#pricing" className={` nav-link `}>Pricing</a> </li>
              <li className='relative'><a href="#blog" className={` nav-link `}>Blog</a></li>
            </ul>
            <div>
              <ul className='flex gap-6 mt-4 py-4 border-t'>
                <li><FontAwesomeIcon icon={faFacebookF} className='text-white cursor-pointer' /></li>
                <li><FontAwesomeIcon icon={faInstagram} className='text-white cursor-pointer' /></li>
                <li><FontAwesomeIcon icon={faTwitter} className='text-white cursor-pointer' /></li>
              </ul>
            </div>
          </div>

        )}

      </nav>
    </>
  )
}

export default Navbar