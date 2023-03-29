
const WhatIDo = ({ properties }) => {
    return (
        <div className=' my-auto flex items-center z-[10]'>
        <div className='w-full lg:h-[50%] h-full transition-all flex lg:flex-row flex-col xl:px-60 lg:px-10 md:px-40 px-4 items-center justify-center'>

          <div className='w-full h-full lg:p-16 md:p-8 flex lg:items-center lg:justify-center relative'>
            <div className='flex flex-col relative'>
              <h2 className='md:text-4xl text-2xl font-rubik font-[600] tracking-tight uppercase text-secondary'>What I do</h2>
              <div className='flex space-x-3 md:text-2xl text-lg font-rubik text-white font-[500] lg:mt-7 mt-4'>
                I'm a Versatile Developer Creating Games, Software, and Websites with Expertise and Innovation.
              </div>
              <div className='flex mt-7 items-center lg:pb-[20rem]'>
                <a href='#' className='bg-primary md:text-sm text-xs text-white font-rubik py-[0.35rem] px-6 rounded-full transition-all bg-gradient-to-r hover:text-primary focus:text-primary border-primary border-2 hover:bg-transparent focus:bg-transparent'>
                  See my work
                </a>
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:p-16 md:p-8 flex lg:items-center lg:justify-center md:mt-0 mt-7'>
            <div className='flex flex-col space-y-10 items-center justify-center'>

              <div className='flex border-primary border-b-[1px] pb-8'>
                <div className='w-[80%] flex flex-col'>
                  <h2 className='md:text-2xl text-lg font-rubik font-[600] tracking-tight uppercase text-white'>UI/UX Design</h2>
                  <p className='font-rubik text-[300] text-white mt-2 md:text-sm text-xs'>I create modern, user-friendly UI/UX designs that are easy to navigate and visually appealing.</p> 
                </div>
                
                <a href='/ui' className='w-[20%] flex flex-col justify-between items-end py-1'>
                    <div className='bg-secondary text-white p-2 rounded-full w-min'>
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className='font-poppins font-[600] text-secondary text-sm lg:flex hidden'>Learn more</p>
                </a>
              </div>

              <div className='flex border-primary border-b-[1px] pb-8'>
                <div className='w-[80%] flex flex-col'>
                  <h2 className='md:text-2xl text-lg font-rubik font-[600] tracking-tight uppercase text-white'>Web Development</h2>
                  <p className='font-rubik text-[300] text-white mt-2 md:text-sm text-xs'>I bring expertise and innovation to web development, using the latest technologies and techniques to create dynamic and responsive web pages and applications.</p> 
                </div>
                
                <a href='/ui' className='w-[20%] flex flex-col justify-between items-end py-1'>
                    <div className='bg-secondary text-white p-2 rounded-full w-min'>
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className='font-poppins font-[600] text-secondary text-sm lg:flex hidden'>Learn more</p>
                </a>
              </div>

              <div className='flex border-primary border-b-[1px] pb-8'>
                <div className='w-[80%] flex flex-col'>
                  <h2 className='md:text-2xl text-lg font-rubik font-[600] tracking-tight uppercase text-white'>Game Design / Development</h2>
                  <p className='font-rubik text-[300] text-white mt-2 md:text-sm text-xs'>I bring creativity and technical excellence to game design and development, exploring new ideas and pushing boundaries to create innovative gaming experiences.</p> 
                </div>
                
                <a href='/ui' className='w-[20%] flex flex-col justify-between items-end py-1'>
                    <div className='bg-secondary text-white p-2 rounded-full w-min'>
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className='font-poppins font-[600] text-secondary text-sm lg:flex hidden'>Learn more</p>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
}



export default WhatIDo