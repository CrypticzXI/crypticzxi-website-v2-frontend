import Typewriter from 'typewriter-effect';
import Links from '../utils/Links';

const Introduction = ({ properties }) => {
    return (
        <div className='my-auto min-h-screen max-h-screen flex items-center relative'>
        <div className='w-full h-full absolute flex items-center justify-center blur-2xl opacity-20'>

          <div className='h-72 aspect-square bg-primary rounded-full left-[10rem] top-[10rem] absolute anim-1'></div>
          <div className='h-72 aspect-square bg-required rounded-full left-[35rem] top-[35rem] absolute anim-2'></div>
          <div className='h-36 aspect-square bg-secondary rounded-full left-[60rem] top-[15rem] absolute anim-3'></div>
        </div>

        <div className='z-10 h-full w-full grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-1 grid-cols-1 xl:px-40 lg:px-20 md:px-20 px-4'>

          <div className='w-full md:p-8 aspect-square flex items-center justify-start row-start-2 row-end-2 lg:row-start-1 lg:row-end-1'>
            <div className='flex flex-col'>
              <h2 className='lg:text-4xl text-3xl font-rubik font-[600] tracking-tight uppercase text-white'>Daniel Poulton</h2>
              <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-2'></div>
              <div className='flex space-x-3 lg:text-4xl text-3xl font-rubik uppercase text-secondary font-[200] mt-2'>
                <p className='text-white font-[400]'>I am a</p>
                <Typewriter options={{ random: true, strings: ["Developer", "Designer", "Creative", "UI Designer", "Visual Artist", "UX Designer"], autoStart: true, loop: true,}} />
              </div>
              <p className='font-rubik text-[300] text-white mt-6 lg:text-sm text-xs'>Dream big, for your dreams have the power to shape your destiny.<br></br>Believe in yourself and work hard towards your goals.<br></br>With determination and perseverance, anything is possible.</p> 
              <Links />
            </div>
          </div>

          <div className='w-full aspect-square xl:px-40 lg:px-20 md:px-20 px-8 items-center row-start-1 row-end-1 lg:flex hidden'>
            <div className='w-full p-8 flex items-center justify-center lg:items-center lg:justify-end transition-all'>
                <div className='transition-all w-full bg-center bg-cover aspect-square bg-[url(../public/SVG/Asset-1.svg)]'></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Introduction