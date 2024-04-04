import React, { useEffect } from 'react'
import ProfilePic from '../assets/1.jpg'
import PlayImg from '../assets/watch-img.png'
import './hero.css'
import Img1 from '../assets/company/1.png'
import Img2 from '../assets/company/2.png'
import Img3 from '../assets/company/3.png'
import Img4 from '../assets/company/4.png'
import Img5 from '../assets/company/5.png'

function Hero() {
    useEffect(() => {
        const scrollers = document.querySelectorAll('.scroller');
    
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation(scrollers);
        }
      }, []); // Empty dependency array to run only once on mount
    
      const addAnimation = (scrollers) => {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", 'true');
        });
      };
    return (
        <section className="hero bg-[#F3F3F3] md:px-48 px-12 py-12 section " id='home'>
            <div className='main-part container flex md:flex-row flex-col justify-around gap-8 md:justify-between '>
                <div className="first-part md:w-[60%]">
                    <div>
                        <h2 className='text-2xl font-semibold'>Hello, World!</h2>

                        <div className=''>
                            <h1 className='text-7xl'>I'm Shaman </h1>
                            <h2 className='text-6xl font-semibold leading-[88px]  gradient-heading bg-clip-text text-transparent'  >Front end Developer</h2>
                        </div>
                        <h2 className='text-3xl font-semibold'>With 1 year experience</h2>
                        <div className="btns space-x-3 mt-5">
                            <button className='hello-btn'>Say Hello</button>
                            <button className='border border-black work-btn font-bold hover:bg-black hover:text-white transition-all'>My Works</button>
                        </div>
                    </div>

                </div>
                <div className="second-part md:w-[40%]  relative z-10">
                    <img src={ProfilePic} alt="" srcset="" className='max-w-[400px] max-h-[400px] overflow-hidden  ' />
                    <img src={PlayImg} className='play-img absolute bottom-0 left-[15%] md:left-[20%]' alt="" />
                    <div className="play relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={20} viewBox="0 0 16 20" fill="none" className="svg replaced-svg absolute bottom-12 left-[31%]">
                    <path d="M0.555054 0.169434V19.8302L15.4447 9.99984L0.555054 0.169434Z" fill="white" />
                    </svg>

                    </div>
                </div>


            </div>
            <div className="supplement flex items-center mt-16 gap-8 justify-between">
                <div className='w-[10%] hidden md:block '>
                    <h1 className='text-lg text-gray-600 '>Worked with</h1>
                    <h2 className='text-lg text-gray-600 '>companies</h2>
                </div>
                <div className="scroller  w-[90%] ">
                    <ul className="tag-list scroller-inner flex gap-4 items-center ">
                        <li><img src={Img1} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img2} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img3} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img4} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img5} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img1} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img2} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img3} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img4} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                        <li><img src={Img5} className='max-w-[200px] max-h-[100px]' alt="" srcset="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero