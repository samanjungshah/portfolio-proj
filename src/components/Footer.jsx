import React from 'react'
import Logo from '../assets/logo.png'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return (
        <footer className='bg-[#000000]'>
            <div className="md:px-48 py-12 px-12">
                <div className="container ">
                    <div className='gradient-bg px-16 py-12 md:py-28 bg-green-500  flex md:flex-row flex-col gap-8'>
                        <div className='md:w-1/2'>
                            <h2 className='text-4xl md:text-6xl text-white font-bold'>Got a project? Let's talk</h2>
                        </div>
                        <div className='md:w-1/2 md:max-w-sm'>
                            <p className='text-lg text-white'>Jara is a creative web studio based in New York, USA. You can call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                            <button className=' bg-white border-black work-btn font-bold hover:bg-black hover:text-white transition-all w-[120px] h-[50px] mt-8'>View All</button>
                        </div>
                    </div>
                </div>
                <div className='text-white flex md:flex-row flex-col  gap-4 justify-between items-center mt-6'>
                    <div>
                        <p className='text-lg'>© 2023 Jara All Right Reserved</p>
                    </div>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex gap-6'>
                            <li><FontAwesomeIcon icon={faFacebookF} className='text-white cursor-pointer' /></li>
                            <li><FontAwesomeIcon icon={faInstagram} className='text-white cursor-pointer' /></li>
                            <li><FontAwesomeIcon icon={faTwitter} className='text-white cursor-pointer' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer