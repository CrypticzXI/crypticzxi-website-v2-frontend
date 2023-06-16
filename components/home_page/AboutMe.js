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
      <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 px-8 gap-16 relative'>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.7)]'>
        </div>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2Fc91b%2Ff%2F2016%2F366%2F8%2F8%2Fhd_low_poly_wallpaper__cyan__by_bluhurr-datpabb.jpg&f=1&nofb=1&ipt=d90a0f54a28e88d548194d969b27cd697b9685567bd2d60feda1632aeb029622&ipo=images)]'>
        </div>

        <div className='w-full h-full flex my-auto items-center justify-center z-[999] md:py-0 py-5'>
          <div className='transition-all w-full max-w-lg bg-center bg-cover aspect-square rounded-full shadow-2xl bg-[url(../public/SVG/Asset-1.svg)]'></div>
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
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                      {({ isVisible }) => (
                        <div>
                          {isVisible ? <CountUp className='lg:text-2xl text-lg font-poppins font-[800] text-primary' end={4} duration={3} /> : <p className="text-2xl font-poppins font-[800] text-primary">0</p>}
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