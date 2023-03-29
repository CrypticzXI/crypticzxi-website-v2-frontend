import Links from "../utils/Links"
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const AboutMe = ({ properties }) => {
    useCountUp({
      ref: 'counter',
      enableScrollSpy: true,
      scrollSpyDelay: 1,
      end: 1000
    });
    return (
        <div className='my-auto min-h-screen max-h-screen flex items-center relative'>
        <div className='w-full h-full absolute flex items-center justify-center blur-2xl opacity-20'>

          <div className='h-72 aspect-square bg-primary rounded-full left-[10rem] top-[10rem] absolute anim-1'></div>
          <div className='h-72 aspect-square bg-required rounded-full left-[35rem] top-[35rem] absolute anim-2'></div>
          <div className='h-36 aspect-square bg-secondary rounded-full left-[60rem] top-[15rem] absolute anim-3'></div>
        </div>

        <div className='z-10 h-full w-full grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-1 grid-cols-1 xl:px-40 lg:px-20 md:px-20 px-4'>

          <div className='w-full aspect-square xl:px-40 lg:px-20 md:px-20 px-8 items-center row-start-1 row-end-1 lg:flex hidden'>
            <div className='w-full p-8 flex items-center justify-center lg:items-center lg:justify-end transition-all'>
                <div className='transition-all w-full bg-center bg-cover aspect-square bg-[url(../public/SVG/Asset-1.svg)]'></div>
            </div>
          </div>


          <div className='w-full lg:p-8 aspect-square flex items-center justify-start row-start-2 row-end-2 lg:row-start-1 lg:row-end-1'>
            <div className='flex flex-col'>
              <h2 className='lg:text-4xl text-2xl font-rubik font-[600] tracking-tight uppercase text-secondary'>About Me</h2>
              <div className='flex space-x-3 lg:text-2xl text-lg font-rubik uppercase text-white font-[500] lg:mt-7 mt-3'>
                I'm a Versatile Developer Creating Games, Software, and Websites with Expertise and Innovation.
              </div>
              <p className='font-rubik text-[300] text-white lg:mt-7 mt-3 lg:text-sm text-xs'>I have the skills and expertise to develop engaging games, powerful software, and dynamic websites. I bring a creative and innovative approach to each project, whether it involves intricate game mechanics, robust software applications, or visually stunning and functional websites. I have a deep understanding of programming languages, frameworks, and tools, which enables me to create custom solutions that meet the unique needs of each client. My passion for technology and commitment to excellence drive me to deliver exceptional results that exceed expectations.</p> 
              <div className='md:w-[80%] w-full flex mt-7 space-x-1'>
                  <div className='w-full flex flex-col'>
                    <h2 className='text-2xl font-poppins font-[800] text-primary'></h2>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp className='lg:text-2xl text-lg font-poppins font-[800] text-primary' end={17} duration={3} /> : <p className="text-2xl font-poppins font-[800] text-primary">0</p>}
                        </div>
                      )}
                    </VisibilitySensor>
                    <p className='font-rubik text-white md:text-sm text-xs'>Years of Experience</p>
                  </div>
                  <div className='w-full'>
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp className='lg:text-2xl text-lg font-poppins font-[800] text-primary' end={11} duration={3} /> : <p className="text-2xl font-poppins font-[800] text-primary">0</p>}
                        </div>
                      )}
                    </VisibilitySensor>
                    <p className='font-rubik text-white md:text-sm text-xs'>Projects Completed</p>
                  </div>
                  <div className='w-full'>
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
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