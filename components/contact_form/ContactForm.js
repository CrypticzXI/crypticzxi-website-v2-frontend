import Links from "../utils/Links"
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Contact = ({ properties }) => {
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
            <div className='flex flex-col w-full md:py-0 py-5'>
              <h2 className='lg:text-4xl text-lg font-rubik font-[600] tracking-tight uppercase text-secondary text-center'>Contact Me</h2>
              <form method="POST" action="https://formspree.io/f/mpzeywov" className="text-white font-rubik w-full flex flex-col space-y-5 mt-7">

                    <div className="flex flex-row w-full justify-center space-x-10">
                        <div className="flex-col w-full">
                            <p className="mb-2 text-center">Your Name <span className="text-required">*</span></p>
                            <input type="text" name="name" id="name" placeholder="John Snow" required className="w-full h-[3rem] bg-secondarybackground rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
                        </div>
                        <div className="flex-col w-full">
                            <p className="mb-2 text-center">Your Email <span className="text-required">*</span></p>
                            <input type="email" name="email" id="email" placeholder="you@example.com" required className="w-full h-[3rem] bg-secondarybackground rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
                        </div>
                    </div>

                        <div className="flex-col w-full">
                        <p className="mb-2 ml-2">Subject <span className="text-required">*</span></p>
                        <input type="text" name="subject" id="subject" placeholder="I'm looking for assets" required className="w-full h-[3rem] bg-secondarybackground rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
                        </div>

                        <div className="flex-col w-full">
                        <p className="mb-2 ml-2">Company</p>
                        <input type="text" name="company" id="company" placeholder="Fancy Studios" className="w-full h-[3rem] bg-secondarybackground rounded-lg border-2 focus:outline-none px-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
                        </div>

                        <div className="flex-col w-full">
                        <p className="mb-2 ml-2">Body <span className="text-required">*</span></p> 
                        <textarea name="body" id="body" required rows="6" cols="20" className="w-full bg-secondarybackground rounded-lg border-2 focus:outline-none px-4 py-4 border-primary focus:border-secondary invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></textarea>
                        </div>

                        <div className="bg-secondary border-secondary border-2 rounded hover:bg-transparent flex items-center justify-center h-12 w-full transition-all">
                        <button type="submit" className="flex items-center justify-center h-full w-full focus:outline-none font-semibold text-sm text-Text transition-all hover:text-secondary font-rubik tracking-wide">Submit</button>
                    </div>

                </form>
                <h2 className='md:text-sm text-xs font-rubik text-[#aaaaaa] text-left mt-3'>Rather directly email me? <a href="mailto:contact@crypticzxi.dev" className="text-secondary">contact@crypticzxi.dev</a></h2>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact