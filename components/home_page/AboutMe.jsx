import Links from "../utils/Links"
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Image from "next/image";
import Daniel from '../../public/face-mirrored.png'


const AboutMe = ({ properties }) => {
    useCountUp({
      ref: 'counter',
      enableScrollSpy: true,
      scrollSpyDelay: 1,
      end: 1000
    });
    return (
      <div className='flex lg:flex-row flex-col xl:px-40 lg:px-20 md:px-20 sm:px-12 px-8 py-16 relative'>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br from-gray-700 to-[rgba(10,10,15,0.7)]'>
        </div>

        <div className='w-full h-full flex my-auto items-center justify-center z-[999] md:py-0 py-5'>
          <div className="transition-all lg:max-w-md max-w-[15rem] w-full rounded-full">
            
            <Image className='transition-all w-full lg:max-w-md max-w-[15rem]' src={Daniel} />
          </div>
        </div>
        <div className='w-full h-full flex my-auto items-center justify-center z-[999] md:py-0 py-5'>
          <div className='md:w-[80%] w-full flex mt-7 space-x-1'>
            <div className='flex flex-col'>
              <h2 className='lg:text-4xl text-2xl font-rubik font-[600] tracking-tight uppercase text-secondary'>About Me</h2>
              <div className='flex space-x-3 lg:text-2xl text-lg font-rubik uppercase text-white font-[500] lg:mt-7 mt-3'>
                I'm a Versatile Developer Creating Games, Software, and Websites with Expertise and Innovation.
              </div>
              <p className='font-rubik text-[300] text-white mt-2 lg:text-sm text-xs'>I have the skills and expertise to develop engaging games, powerful software, and dynamic websites. I bring a creative and innovative approach to each project, whether it involves intricate game mechanics, robust software applications, or visually stunning and functional websites. I have a deep understanding of programming languages, frameworks, and tools, which enables me to create custom solutions that meet the unique needs of each client. My passion for technology and commitment to excellence drive me to deliver exceptional results that exceed expectations.</p> 
              <div className='md:w-[80%] w-full flex mt-7 space-x-1'>
                  <div className='w-full flex flex-col'>
                    <h2 className='text-2xl font-poppins font-[800] text-primary'></h2>
                    <VisibilitySensor partialVisibility offset={{ top: 100 }}>
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp className='lg:text-2xl text-lg font-poppins font-[800] text-primary' end={4} duration={3} /> : <p className="text-2xl font-poppins font-[800] text-primary">0</p>}
                        </div>
                      )}
                    </VisibilitySensor>
                    <p className='font-rubik text-white md:text-sm text-xs'>Years of Experience</p>
                  </div>
                  <div className='w-full'>
                  <VisibilitySensor partialVisibility offset={{ top: 100 }}>
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp className='lg:text-2xl text-lg font-poppins font-[800] text-primary' end={11} duration={3} /> : <p className="text-2xl font-poppins font-[800] text-primary">0</p>}
                        </div>
                      )}
                    </VisibilitySensor>
                    <p className='font-rubik text-white md:text-sm text-xs'>Projects Completed</p>
                  </div>
                  <div className='w-full'>
                  <VisibilitySensor partialVisibility offset={{ top: 100 }}>
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp className='lg:text-2xl text-lg font-poppins font-[800] text-primary' end={7} duration={3} /> : <p className="text-2xl font-poppins font-[800] text-primary">0</p>}
                        </div>
                      )}
                    </VisibilitySensor>
                    <p className='font-rubik text-white md:text-sm text-xs'>Satisfied Clients</p>
                  </div>
                </div>
              <Links />
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe