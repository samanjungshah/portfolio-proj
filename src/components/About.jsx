import React, { useEffect, useState } from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb,faEnvelope,faBolt,faPlugCirclePlus,faShapes } from '@fortawesome/free-solid-svg-icons'


function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767); // Assuming 767px is your mobile breakpoint
        };

        handleResize(); // Initial check on component mount
        window.addEventListener('resize', handleResize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);

    return (
        <section className='about section' id='about'>
            <div className="about1 container md:px-48 px-8 flex flex-col md:flex-row py-20 gap-12">
                <div className="in">

                    <div className={`flex flex-col justify-center items-center ${isMobile ? 'experience-sm' : 'experience'} md:rotate-[-15deg] md:w-[280px] h-[420px]`}>
                        <div className='md:rotate-[15deg] text-white'>
                            <h2 className='text-9xl'>10</h2>
                            <h3 className='text-center text-xl'>Years <br />Experience</h3>

                        </div>

                    </div>
                </div>
                <div className="w-full md:w-1/2  mt-6 ">
                    <p className='text-[32px] md:text-[44px] leading-[50px]'>Over <span className='gradient-heading bg-clip-text text-transparent'>ten years of designing,</span>  I transform concepts projects using <span className='gradient-heading bg-clip-text text-transparent'>creativity</span> and <span className='gradient-heading bg-clip-text text-transparent'>interactive design</span> worldwide.</p>
                    <button className='border border-black font-bold hover:bg-black hover:text-white py-3 px-3 mt-3 font-sans'>Download My Resume </button>
                </div>
                <div className="w-[30%] font-sans flex flex-row md:flex-col items-center gap-8 mt-8 ">
                    <div className='space-y-3 w-full'>
                        <h2 className='text-4xl font-semibold'>14</h2>
                        <p>Award winner</p>
                    </div>
                    <div className='space-y-3 w-full'>
                        <h2 className='text-4xl font-semibold'>1.2k</h2>
                        <p>Worldwide client</p>
                    </div>
                    <div className='space-y-3 w-full'>
                        <h2 className='text-4xl font-semibold'>3.5k</h2>
                        <p>Job done successfully</p>
                    </div>


                </div>
            </div>

            <div className="about2 gradient-bg">
                <div className="container md:px-48 px-4  py-20 ">
                    <div className=''>
                        <div className='flex flex-col gap-4 md:flex-row justify-start md:justify-between md:items-center w-full mr-4'>
                            <h2 className='text-5xl text-white font-bold'>My Specialities</h2>
                            <p className='text-white text-xl'>

                                <a href=""><FontAwesomeIcon icon={faEnvelope}/> henry@gmail.com</a>
                            </p>

                        </div>
                        <div className='flex md:flex-row flex-col mt-12 gap-4'>
                            <div className="md:w-1/4">
                                <div className='bg-white p-8 '>
                                    <div className='mb-4 '>
                                        <FontAwesomeIcon icon={faLightbulb} className='icon-anim text-white gradient-bg p-5 text-xl rounded-lg ml-2' />
                                    </div>
                                    <h1 className='text-lg pl-2 font-semibold mb-2'>Mobile app</h1>
                                    <ul className='list-disc list-inside pl-2 space-y-2 pb-12'>
                                        <li>Creative Teamwork</li>
                                        <li>Design Material</li>
                                        <li>Google Payment Detail</li>
                                        <li>Trend and Data Analysis</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="md:w-1/4">
                                <div className='bg-white p-8 '>
                                    <div className='mb-4 '>
                                        <FontAwesomeIcon icon={faPlugCirclePlus} className='icon-anim text-white gradient-bg p-5 text-xl rounded-lg ml-2' />
                                    </div>
                                    <h1 className='text-lg pl-2 font-semibold mb-2'>Mobile app</h1>
                                    <ul className='list-disc list-inside pl-2 space-y-2 pb-12'>
                                        <li>Creative Teamwork</li>
                                        <li>Design Material</li>
                                        <li>Google Payment Detail</li>
                                        <li>Trend and Data Analysis</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="md:w-1/4">
                                <div className='bg-white p-8 '>
                                    <div className='mb-4 '>
                                        <FontAwesomeIcon icon={faLightbulb} className='icon-anim text-white gradient-bg p-5 text-xl rounded-lg ml-2' />
                                    </div>
                                    <h1 className='text-lg pl-2 font-semibold mb-2'>Mobile app</h1>
                                    <ul className='list-disc list-inside pl-2 space-y-2 pb-12'>
                                        <li>Creative Teamwork</li>
                                        <li>Design Material</li>
                                        <li>Google Payment Detail</li>
                                        <li>Trend and Data Analysis</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="md:w-1/4">
                                <div className='bg-white p-8 '>
                                    <div className='mb-4 '>
                                        <FontAwesomeIcon icon={faShapes} className='icon-anim text-white gradient-bg p-5 text-xl rounded-lg ml-2' />
                                    </div>
                                    <h1 className='text-lg pl-2 font-semibold mb-2'>Mobile app</h1>
                                    <ul className='list-disc list-inside pl-2 space-y-2 pb-12'>
                                        <li>Creative Teamwork</li>
                                        <li>Design Material</li>
                                        <li>Google Payment Detail</li>
                                        <li>Trend and Data Analysis</li>
                                    </ul>

                                </div>
                            </div>
             
                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default About