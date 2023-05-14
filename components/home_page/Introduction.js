import Typewriter from 'typewriter-effect';
import Links from '../utils/Links';

const Introduction = ({ properties }) => {
    return (
      <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 px-8 mt-16 gap-16 relative'>
      <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'>
      </div>
      <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images)]'>
      </div>
      
      <div className='w-full h-full flex my-auto items-center justify-center z-[999]'>
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
      <div className='w-full h-full flex my-auto items-center justify-center z-[999]'>
        
      </div>
      </div>
    )
}

export default Introduction