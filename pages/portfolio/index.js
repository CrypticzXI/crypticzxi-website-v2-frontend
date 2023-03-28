import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header} from "../../components"
import Typewriter from 'typewriter-effect';
import { sanityClient, urlFor } from "../../sanity"

const Portfolio = ({
  portfoliodata
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
            <div className='grid lg:grid-cols-2 w-full gap-8 grid-cols-1'>

            {portfoliodata.map((portfolio) => (
                <a href={`/portfolio/${portfolio.slug.current}`} key={portfolio._key} className='w-full aspect-video rounded-lg border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative'>

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





      </div>
    </div>
    
  )
}


export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == "portfolio"]{
    title,
    owninguser->{
      name,
    },
    thumbnail,
    images,
    slug
  }`
  const portfoliodata = await sanityClient.fetch(query)

  return {
    props: {
      portfoliodata
    }
  }
}

export default Portfolio