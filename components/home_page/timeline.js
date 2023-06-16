import Typewriter from 'typewriter-effect';
import Links from '../utils/Links';

const Timeline = ({ properties }) => {
    return (
      <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 px-8 mt-16 gap-16 relative'>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'>
        </div>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images)]'>
        </div>
        
        <div className='w-full h-full items-center justify-center z-[999]'>
            <div className='flex flex-col w-full h-full my-10'> 
                <h2 className='lg:text-4xl text-xl font-rubik font-[600] tracking-tight uppercase text-secondary text-center'>Timeline</h2>
                <div className='TIMELINE w-full mt-32 flex items-center justify-center'>
                    <div className='border-b-2 border-primary w-full'></div>
                    <div className='bg-secondary w-6 h-6 absolute'></div>
                    <div className='bg-secondary w-6 h-6 absolute ml-48'></div>
                    <div className='bg-secondary w-6 h-6 absolute mr-48'></div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Timeline