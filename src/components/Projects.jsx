import React from 'react'
import Proj1 from '../assets/project1.jpg'
import Proj2 from '../assets/project2.jpg'
import Proj3 from '../assets/project3.jpg'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import I1 from '../assets/icon1.svg'
import I2 from '../assets/phone.svg'
import I3 from '../assets/talk.svg'
import Conc from '../assets/conc.jpg'
import Stat from '../assets/statement.jpg'


function Projects() {
    return (
        <section className="project section" id='project'>
            <div className="project1 container md:px-48 pl-8  py-12 ">
                <div className='flex md:flex-row flex-col gap-12'>
                    <div className='md:w-1/2 w-full flex flex-col md:gap-20 mt-2'>
                        <h1 className='text-4xl md:text-7xl'>Features <br />Project</h1>
                        <div className='mt-6 '>
                            <div className='overflow-hidden'>
                                <div className="img-scale">

                                    <img src={Proj1} className='w-full' alt="" />
                                </div>
                            </div>
                            <p className='text-lg'>Web Design</p>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col gap-8'>
                        <div>
                            <div className="overflow-hidden" >
                                <div className="img-scale">

                                    <img src={Proj2} alt="" className='w-full' />
                                </div>
                            </div>
                            <p className='text-lg'>UI/UX design</p>
                        </div>
                        <div>
                            <div className="overflow-hidden">
                                <div className="img-scale">

                                    <img src={Proj3} className='w-full' alt="" />
                                </div>
                            </div>
                            <p className='text-lg'>Custom design</p>

                        </div>

                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className='hello-btn'>View All Works</button>
                </div>
            </div>
            <div className='project2 bg-[#F3F3F3] md:px-48  relative overflow-hidden px-8'>

                <div className="   py-16   ">
                    <div className='pt-8'>

                        <h2 className=' text-3xl md:text-5xl'>Working Process</h2>
                    </div>
                    <div className="flex  md:flex-row flex-col mt-8 md:w-[70%] gap-8">
                        <div className="md:w-1/3  bg-white p-8 space-y-4">
                            <p className='text-2xl'>Step:1</p>
                            <img src={I1} alt="" />
                            <h2 className='text-2xl'>Send up your <br />project</h2>
                            <p>Compellingly repurpose covalent core competencies for top-line paradigms.</p>
                        </div>
                        <div className="md:w-1/3 bg-white p-8 space-y-4">
                            <p className='text-2xl'>Step:2</p>
                            <img src={I2} alt="" />
                            <h2 className='text-2xl'>Get it delivered on br time</h2>
                            <p>Compellingly repurpose covalent core competencies for top-line paradigms.</p>
                        </div>
                        <div className="md:w-1/3 bg-white p-8 space-y-4">
                            <p className='text-2xl'>Step:3</p>
                            <img src={I3} alt="" />
                            <h2 className='text-2xl'>Take on more clients & scale up</h2>
                            <p>Compellingly repurpose covalent core competencies for top-line paradigms.</p>
                        </div>

                    </div>
                    <div className='hidden md:block absolute top-0 right-0 w-[30%] wrapper'>
                        <img src={Conc} alt="" className='w-full' />
                    </div>
                    <div className='text-center pt-8 mr-20 md:mr-72'>
                        <button className='border border-black work-btn font-bold hover:bg-black hover:text-white transition-all'>Contact with me</button>
                    </div>

                </div>
            </div>
            <div className="project3 gradient-bg md:px-48 px-8 py-28">
                <div className="flex md:flex-row flex-col gap-20">
                    <div className='md:w-[30%]'>
                        <img src={Stat} alt="" className='w-full ' />
                    </div>
                    <div className='md:w-[70%] mt-8'>
                        <p className='text-3xl text-white font-semibold max-w-2xl'>“We worked with Marketify designing our backend web app from scratch and we are happy with the results. He has good communication skills and uses robust workflows that allowed me and my team to work with him efficiently.”</p>
                        <p className='text-xl mt-4 text-white'>By Adam Walker
                             <br />CEO @Javis Company Ltd.</p>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Projects