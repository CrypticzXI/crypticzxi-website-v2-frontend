import Image from 'next/image';
import Logo from '../../public/Logo.svg';
import { useRef } from 'react';

const Header = () => {

    return (
        <div className='absolute w-full z-[1000]'>
            <div className='w-full h-16 flex xl:px-20 lg:px-20 relative md:px-10 px-10 rounded-b-2xl bg-white backdrop-blur-md saturate-150 bg-opacity-5'>
                <div className="h-full w-max items-center flex">
                    <a href="/" className=''>
                        <Image alt='Daniel Poulton Logo' className='lg:w-60 ' src={Logo} />
                    </a>
                </div>


                <div className="flex-grow"></div>

                <div className="h-full md:flex items-center justify-center space-x-2 text-sm hidden ">
                    <a href='/' className='text-white font-rubik py-[0.35rem] lg:px-6 md:px-4 sm:px-4 px-2 rounded-full transition-all hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Home
                    </a>
                    <a href='/portfolio/' className='text-white font-rubik py-[0.35rem] lg:px-6 md:px-4 sm:px-4 px-2 rounded-full transition-all hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Portfolio
                    </a>
                    <a href='/blog/' className='text-white font-rubik py-[0.35rem] lg:px-6 md:px-4 sm:px-4 px-2 rounded-full transition-all hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Blog
                    </a>
                    <a href='/aboutme/' className='text-white font-rubik py-[0.35rem] lg:px-6 md:px-4 sm:px-4 px-2 rounded-full transition-all hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        About
                    </a>
                    <a href='/contact/' className='text-white font-rubik py-[0.35rem] lg:px-6 md:px-4 sm:px-4 px-2 rounded-full transition-all hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Contact
                    </a>
                </div>

                <div className='h-full flex items-center justify-center z-[1001]'>
                    <a className='px-2 dropdown text-white w-6 h-6 hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <div className='absolute hidden dropdown-content w-full px-auto left-0 top-16 z-[999]'>
                            <div className='flex-col mx-auto text-white font-light font-poppins rounded-b-2xl h-full md:w-[50%] w-[80%] bg-white backdrop-blur-md saturate-150 bg-opacity-5'>
                                <a href='/' className='w-full text-center py-4 hover:bg-gray-900 transition-all hover:text-primary font-poppins font-light'>Home</a>
                                <a href='/portfolio/' className='w-full text-center py-4 hover:bg-gray-900 transition-all hover:text-primary font-poppins font-light'>Home</a>
                                <a href='/blog/' className='w-full text-center py-4 hover:bg-gray-900 transition-all hover:text-primary font-poppins font-light'>Home</a>
                                <a href='/aboutme/' className='w-full text-center py-4 hover:bg-gray-900 transition-all hover:text-primary font-poppins font-light'>Home</a>
                                <a href='/contact/' className='w-full text-center py-4 hover:bg-gray-900 rounded-b-2xl transition-all hover:text-primary font-poppins font-light'>Home</a>

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Header