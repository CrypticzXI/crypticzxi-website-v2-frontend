import Image from 'next/image';
import Logo from '../../public/Logo.svg';

const Header = () => {
    return (
        <div className='absolute w-full z-[1000]'>
            <div className='w-full h-16 flex xl:px-20 lg:px-20 md:px-10 px-8 rounded-b-2xl bg-white backdrop-blur-md saturate-150 bg-opacity-5'>
                <div className="h-full w-[40%] items-center md:flex hidden">
                    <a href="/" className='lg:text-2xl text-xl font-rubik font-[600] tracking-tight uppercase text-white'>
                        <Image alt='Daniel Poulton Logo' className='w-60' src={Logo} />
                    </a>
                </div>

                <div className="flex-grow"></div>

                <div className="h-full flex items-center justify-center space-x-2">
                    <a href='/' className='text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all text-sm hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Home
                    </a>
                    <a href='/portfolio/' className='text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all text-sm hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Portfolio
                    </a>
                    <a href='/blog/' className='text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all text-sm hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Blog
                    </a>
                    <a href='/aboutme/' className='text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all text-sm hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        About
                    </a>
                    <a href='/contact/' className='text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all text-sm hover:text-secondary focus:text-secondary hover:bg-transparent focus:bg-transparent'>
                        Contact
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Header