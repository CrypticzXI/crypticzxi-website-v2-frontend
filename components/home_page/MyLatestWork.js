import { sanityClient, urlFor } from "../../sanity"

const MyLatestWork = ({ portfoliodata }) => {
    return(
        <div className='my-auto flex items-center relative'>
        <div className='w-full h-full absolute flex items-center justify-center blur-2xl opacity-20'>

        <div className='h-72 aspect-square bg-primary rounded-full left-[10rem] top-[2rem] absolute anim-1'></div>
        <div className='h-72 aspect-square bg-required rounded-full right-[2rem] bottom-[0rem] absolute anim-2'></div>
        <div className='h-36 aspect-square bg-secondary rounded-full left-[54rem] top-[25rem] absolute anim-3'></div>
        </div>


        <div className='h-full w-full flex lg:flex-row flex-col xl:px-40 lg:px-10 md:px-40 px-4 py-8 z-10'>
        <div className='w-full h-full lg:p-8'>
            <div className='grid lg:grid-cols-2 lg:grid-rows-2 w-full gap-8 grid-rows-4 grid-cols-1'>

            <div className='w-full aspect-video flex flex-col lg:p-8 xl:pr-40'>
                <div className='flex flex-col'>
                    <h2 className='lg:text-4xl text-xl font-rubik font-[600] tracking-tight uppercase text-secondary'>My Latest Work</h2>
                    <div className='space-x-3 lg:text-lg text-xs font-rubik text-white font-[400] lg:mt-7 mt-4 break-words'>
                    I am always striving to improve the quality of my work, and I value your opinion on my latest project. Please take a look at my work and share your thoughts on how I can enhance it further.
                    </div>
                </div>
                <div className='flex items-center mt-5'>
                    <a href='/portfolio/' className='bg-primary text-sm text-white font-rubik py-[0.35rem] px-6 rounded-full transition-all bg-gradient-to-r hover:text-primary focus:text-primary border-primary border-2 hover:bg-transparent focus:bg-transparent'>
                    See my work
                    </a>
                </div>
            </div>

            {portfoliodata.map((portfolio) => (
                <a href={`/portfolio/${portfolio.slug.current}`} className='w-full aspect-video rounded-lg border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative'>

                    <div className="w-full h-full hidden mx-auto my-auto items-center justify-center z-20 absolute top-0 right-0 bottom-0 tracker-child left-0">
                        <div className="flex flex-col items-center justify-center mx-auto my-auto absolute top-0 right-0 bottom-0 left-0">
                            <p className="font-rubik font-[400] text-sm text-center uppercase text-[#aaaaaa]">Web Design</p>
                            <h2 className="text-white font-poppins font-[600] text-base uppercase mt-2 mb-3">{portfolio.title}</h2>
                            <div className="border-b-4 border-secondary w-[4rem]"></div>
                        </div>
                    </div>
                    <div className="transition-all w-full bg-center bg-cover aspect-video" style={{backgroundImage: `url(${urlFor(portfolio.thumbnail.image)})`}}></div>
                </a>
            ))}

            </div>
        </div>

        </div>


        </div>
    )
}

export default MyLatestWork