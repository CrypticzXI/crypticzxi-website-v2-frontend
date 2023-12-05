import Typewriter from 'typewriter-effect';
import Links from '../utils/Links';
import Image from 'next/image';
import Buildings from '../../public/Page_Content/LowPolyScene.jpeg'
import Logo from '../../public/Logo.svg';

const Introduction = ({ properties }) => {
	return (

		<div className='transition-all flex md:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 px-8 gap-16 relative'>
			<Image class='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[995]' alt='Buildings' src={Buildings} />
			<div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'>
			</div>

			<div className='absolute bottom-[130px] w-full left-0 z-[999] flex items-center justify-center space-x-4 text-white font-poppins font-[200] animate-bounce-600ms'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
				<p>Scroll Down</p>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</div>

			<div className='transition-all w-full h-full flex my-auto items-center justify-center z-[999] md:py-0 py-5'>
				<div className='flex flex-col'>
					<Image src={Logo} className='lg:w-[18.5rem] w-[15.4rem]' />
					<div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-2'></div>
					<div className='flex space-x-3 lg:text-4xl text-3xl font-poppins uppercase text-secondary font-[200] mt-2'>
						<p className='text-white font-[400]'>I am a</p>
						<Typewriter options={{ random: true, strings: ["Developer", "Designer", "Creative", "UI Designer", "Visual Artist", "UX Designer"], autoStart: true, loop: true, }} />
					</div>
					<p className='font-poppins text-[300] text-white mt-6 lg:text-sm text-xs'>Dream big, for your dreams have the power to shape your destiny.<br></br>Believe in yourself and work hard towards your goals.<br></br>With determination and perseverance, anything is possible.</p>
					<Links />
				</div>
			</div>
			<div className='md:flex hidden w-full h-full my-auto items-center justify-center z-[999] md:py-0 py-5'>

			</div>
		</div>

	)
}

export default Introduction