import React from 'react'
import Blog1 from '../assets/blog1.jpg'
import Blog2 from '../assets/blog2.jpg'
import './blog.css'


function Blog() {
  return (
    <section className="blog section" id='blog'>
        <div className="md:px-48 py-12 px-4">
            <div className="container">
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                    <p className='text-4xl md:text-6xl font-bold '>Recent Blog</p>
                    <button className='border  border-black work-btn font-bold hover:bg-black hover:text-white transition-all w-[120px] h-[50px]'>View All</button>
                </div>
                <div className="flex md:flex-row flex-col mt-12 gap-8">
                    <div className='md:w-1/2'>
                        <div className='hover-img-scale'>
                            <img src={Blog1} alt="" className='' />
                        </div>
                        <div className='mt-4'>
                            <p className='text-xl gradient-heading bg-clip-text text-transparent'>Sep 22,2023</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-4xl font-bold hover:border-b text-gradient-hover relative'>Why your client needs a</p> 
                           <p className='text-4xl font-bold hover:border-b text-gradient-hover relative'> responsive website</p>
                        </div>

                    </div>
                    <div className='md:w-1/2'>
                        <div className='hover-img-scale'>
                            <img src={Blog2} alt="" className='' />
                        </div>
                        <div className='mt-4'>
                            <p className='text-xl gradient-heading bg-clip-text text-transparent'>Sep 22,2023</p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-4xl font-bold hover:border-b text-gradient-hover relative'>Best design books for </p> 
                           <p className='text-4xl font-bold hover:border-b text-gradient-hover relative'> increase design knowledge</p>
                        </div>

                    </div>
                
                </div>
            </div>

        </div>
    </section>
  )
}

export default Blog