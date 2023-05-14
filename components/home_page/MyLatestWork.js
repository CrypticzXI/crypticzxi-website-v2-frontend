import { sanityClient, urlFor } from "../../sanity"

const MyLatestWork = ({ portfoliodata }) => {
    return(
        <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 px-8 gap-16 relative'>
            <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'>
            </div>
            <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F0e%2F6d%2F66%2F0e6d666c365e94283f2cbe7bd063f8e1.png&f=1&nofb=1&ipt=012df932cba1b4ce681238a9c75ae200b80f8fd35bcea549ad8c5f63586bb5d0&ipo=images)]'>
            </div>

            <div className='grid lg:grid-cols-2 lg:grid-rows-2 w-full gap-8 grid-rows-4 grid-cols-1 z-[999] py-12'>

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
    )
}

export default MyLatestWork