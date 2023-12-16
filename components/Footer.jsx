import Image from 'next/image';
import Logo from '../public/Logo.svg';

const Footer = () => {
    return (
        <div className='lg:h-72 w-full flex flex-col lg:flex-row bg-gray-500'>

            <div className='left lg:h-72 lg:w-[50%] w-full flex flex-col lg:p-16 p-8 justify-center'>
                < a href="/" className='lg:text-2xl text-xl font-rubik font-[600] tracking-tight uppercase text-white' >
                    <Image alt='Daniel Poulton Logo' className='w-60' src={Logo} />
                </a >
                <p className='font-poppins text-white text-sm mt-5'>Made with love in the UK 🇬🇧❤️</p>
                <p className='font-poppins text-white text-xs mt-2'>Made With Next.js, TailwindCSS. By Daniel Poulton</p>
                <p className='font-poppins text-white text-sm mt-5'>© Copyright Daniel Poulton, 2005 - 2023</p>
            </div>

            <div className='left lg:h-72 lg:w-[50%] w-full flex flex-col lg:p-16 p-8 justify-center'>
                <p className='font-poppins text-white text-md font-bold'>Quick Links</p>
                <div className='flex space-x-10'>
                    <div className='flex flex-col'>
                        <a href='/' className='font-poppins text-white text-sm mt-4'>Home</a>
                        <a href='/portfolio/' className='font-poppins text-white text-sm mt-2'>Portfolio</a>
                        <a href='/blog/' className='font-poppins text-white text-sm mt-2'>Blog</a>
                        <a href='/aboutme/' className='font-poppins text-white text-sm mt-2'>About Me</a>
                        <a href='/contact/' className='font-poppins text-white text-sm mt-2'>Contact Me</a>
                    </div>
                    <div className='flex flex-col'>
                        <a href='/links' className='font-poppins text-white text-sm mt-4'>Links</a>
                        <a href='/privacy' className='font-poppins text-white text-sm mt-2'>Privacy Policy</a>
                        <a href='/terms' className='font-poppins text-white text-sm mt-2'>Terms and Conditions</a>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Footer

// < a href = "/" className = 'lg:text-2xl text-xl font-rubik font-[600] tracking-tight uppercase text-white' >
//     <Image alt='Daniel Poulton Logo' className='w-60' src={Logo} />
// </a >