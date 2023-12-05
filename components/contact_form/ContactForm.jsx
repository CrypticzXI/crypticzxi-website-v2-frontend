import Links from "../utils/Links"
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Social_Icons from "../utils/Social_Icons";
import Daniel from '../../public/face.png'
import Image from "next/image";


const Contact = ({ properties }) => {
  useCountUp({
    ref: 'counter',
    enableScrollSpy: true,
    scrollSpyDelay: 1,
    end: 1000
  });
  return (
    <div className="w-screen h-screen flex xl:px-40 lg:px-36 md:px-20 sm:px-12 px-8">
      <div className="w-[50%] h-full py-16 z-[999]">
        <div className=" bg-gray-700 rounded-2xl w-full h-full p-8 flex flex-col items-center">
          <h2 className="font-poppins text-2xl font-bold text-white tracking-wide">Contact Me</h2>
          <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-4'></div>


          <form method="POST" action="https://formspree.io/f/mpzeywov" className="text-white font-rubik w-full flex flex-col space-y-5 mt-8 px-12">
          
              <div className="flex-col w-full">
                  <p className="mb-2 text-sm text-left">Your Name <span className="text-required">*</span></p>
                  <input type="text" name="name" id="name" placeholder="John Snow" required className="w-full h-[2.75rem] bg-gray-500 rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-gray-500 autofill:text-white"></input>
              </div>
              <div className="flex-col w-full">
                  <p className="mb-2 text-sm text-left">Your Email <span className="text-required">*</span></p>
                  <input type="email" name="email" id="email" placeholder="you@example.com" required className="w-full h-[2.75rem] bg-gray-500 rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-gray-500 autofill:text-white"></input>
              </div>
              <div className="flex-col w-full">
                  <p className="mb-2 text-sm text-left">Company</p>
                  <input  type="text" name="company" id="company" placeholder="Fancy Studios" className="w-full h-[2.75rem] bg-gray-500 rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-gray-500 autofill:text-white"></input>
              </div>
              <div className="flex-col w-full">
                  <p className="mb-2 text-sm text-left">Subject <span className="text-required">*</span></p>
                  <input type="text" name="subject" id="subject" placeholder="I'm looking for assets" required className="w-full h-[2.75rem] bg-gray-500 rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-gray-500 autofill:text-white"></input>
              </div>
              <div className="flex-col w-full">
                  <p className="mb-2 text-sm text-left">Subject <span className="text-required">*</span></p>
                  <textarea name="body" id="body" required rows="4" cols="20" className="w-full bg-gray-500 rounded-lg border-2 focus:outline-none px-4 py-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-gray-500 autofill:text-white"></textarea>
              </div>
          </form>

          <h2 className='md:text-sm text-xs font-rubik text-[#aaaaaa] text-left mt-3'>Rather directly email me? <a href="mailto:contact@crypticzxi.dev" className="text-secondary">contact@crypticzxi.dev</a></h2>
          <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-4'></div>
          <Social_Icons />
        </div>
      </div>
      <div className="w-[50%] h-full py-16 z-[999] flex items-center justify-center">
        <Image className='transition-all w-full max-w-md' src={Daniel} />  
      </div>
    </div>
  )
}

export default Contact