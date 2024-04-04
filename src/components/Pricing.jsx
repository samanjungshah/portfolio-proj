import React from 'react'

function Pricing() {
  return (
    <section className="pricing section" id='pricing'>
      <div className="md:px-48 px-4 py-16">
        <div className="container">
          <div className='text-center'>
            <h2 className='text-6xl font-bold'>Pricing</h2>
          </div>
          <div className="flex md:flex-row flex-col mt-12 gap-8">
            <div className="md:w-1/3 bg-[#E9F0F5] py-16 shadow-md rounded-md">
              <div className="text-center space-y-3">
                <p>BASIC</p>
                <p className='text-2xl font-sans font-bold'>40 Hours</p>
                <p>10 hours per week</p>
                <p className='text-6xl font-sans font-bold'>$50 <span className='text-xl'>/hour</span> </p>
              </div>
              <div className='mt-8 text-center'>

                <button className='border  border-black work-btn font-bold hover:bg-black hover:text-white transition-all'>Get Started Now</button>
              </div>
            </div>
            <div className="md:w-1/3 bg-black text-white py-16 shadow-md rounded-md">
              <div className="text-center space-y-3">
                <p>BASIC</p>
                <p className='text-2xl font-sans font-bold'>60 Hours</p>
                <p>10 hours per week</p>
                <p className='text-6xl font-sans font-bold'><span className='gradient-heading bg-clip-text text-transparent'>$60</span> <span className='text-xl'>/hour</span> </p>
              </div>
              <div className='mt-8 text-center'>

                <button className='border  border-white work-btn font-bold hover:bg-white hover:text-black transition-all'>Get Started Now</button>
              </div>
            </div>
            <div className="md:w-1/3 bg-[#FFE6E9] py-16 shadow-md rounded-md">
              <div className="text-center space-y-3">
                <p>BASIC</p>
                <p className='text-2xl font-sans font-bold'>90 Hours</p>
                <p>10 hours per week</p>
                <p className='text-6xl font-sans font-bold'>$120 <span className='text-xl'>/hour</span> </p>
              </div>
              <div className='mt-8 text-center'>

                <button className='border  border-black work-btn font-bold hover:bg-black hover:text-white transition-all'>Get Started Now</button>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing