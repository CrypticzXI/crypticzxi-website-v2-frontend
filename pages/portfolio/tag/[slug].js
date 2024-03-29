import React from "react";
import {Header} from "../../../components"
import { sanityClient, urlFor } from "../../../sanity"
const Portfolio = ({
  portfoliodata,
  tags
}) => {
  return (
    <div>




      <div className='bg-background w-screen h-screen min-h-screen overflow-x-hidden'>

        <Header />

        <div className='mt-20'></div>
        
        <div className='my-auto flex items-center relative'>
        <div className='w-full h-full absolute flex items-center justify-center blur-2xl opacity-20'>

        <div className='h-72 aspect-square bg-primary rounded-full left-[10rem] top-[2rem] absolute anim-1'></div>
        <div className='h-72 aspect-square bg-required rounded-full right-[2rem] bottom-[0rem] absolute anim-2'></div>
        <div className='h-36 aspect-square bg-secondary rounded-full left-[54rem] top-[25rem] absolute anim-3'></div>
        </div>


        <div className='h-full w-full flex lg:flex-row flex-col xl:px-40 lg:px-10 md:px-40 px-6 py-8 z-10'>
          
        <div className='w-full h-full p-8'>

            <div className="h-full w-full flex items-center justify-center space-x-3 mb-16">
              <div className="text-white font-rubik block box-border break-words leading-[45px] w-full transition-all mt-5">

              <a href={`/portfolio/`} className='border-primary mx-2 hover:border-secondary focus:border-secondary whitespace-nowrap text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all md:text-sm text-xs bg-gradient-to-r hover:text-secondary focus:text-secondary border-2 hover:bg-transparent focus:bg-transparent'>
                All
              </a>
              {tags.map((tags) => (
                <a href={`/portfolio/tag/${tags.slug.current}`} className='border-primary mx-2 hover:border-secondary focus:border-secondary whitespace-nowrap text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all md:text-sm text-xs bg-gradient-to-r hover:text-secondary focus:text-secondary border-2 hover:bg-transparent focus:bg-transparent'>
                  {tags?.name}
                </a>
              ))}

              </div>
            </div>

            {!portfoliodata[0]?.slug ?
              <div className="w-full h-full flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-secondary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-center text-white font-poppins font-bold text-2xl mt-3">Nothing Found!</h2>

              </div>:null
            }
            <div className='grid lg:grid-cols-2 w-full gap-8 grid-cols-1'>

            {portfoliodata.map((portfolio) => (
                <a href={`/portfolio/${portfolio.slug.current}`} key={portfolio._key} className='w-full aspect-video rounded-lg border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative'>

                    <div className="w-full h-full hidden mx-auto my-auto items-center justify-center z-20 absolute top-0 right-0 bottom-0 tracker-child left-0">
                        <div className="flex flex-col items-center justify-center mx-auto my-auto absolute top-0 right-0 bottom-0 left-0">
                            <p className="font-rubik font-[400] text-sm text-center uppercase text-[#aaaaaa]">{portfolio.tags.name}</p>
                            <h2 className="text-white font-poppins font-[600] lg:text-base text-sm uppercase mt-2 mb-3 text-center">{portfolio.title}</h2>
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



      </div>
    </div>
    
  )
}


export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug




    const query = `*[_type == "portfolio" && tagslug == $pageSlug] | order(date desc) {
        title,
        tags->{
            name,
            slug
        },
        date,
        owninguser->{
          name,
        },
        thumbnail,
        images,
        slug
      }`
  const portfoliodata = await sanityClient.fetch(query, { pageSlug })

  var portfoliodataaaaa = portfoliodata;

  if (!portfoliodataaaaa) {
    var portfoliodta = null;
  }


  const tags_query = `*[_type == "tags"]{
    name,
    slug,
  }`
const tags = await sanityClient.fetch(tags_query)
console.log(portfoliodata)
  return {
    props: {
      portfoliodata: portfoliodataaaaa,
      tags
    }
  }
}

export default Portfolio