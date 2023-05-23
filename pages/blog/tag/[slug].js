import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header} from "../../../components"
import Typewriter from 'typewriter-effect';
import { sanityClient, urlFor } from "../../../sanity"
const readingTime = require('reading-time');
import { toPlainText } from '@portabletext/react';

const Portfolio = ({
  blogs,
  tags
}) => {
  const limitString = (post) => {
    const { length: len } = post;
    if (140 < len) {
      const truncated = post.slice(0, 140);
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      return truncated.slice(0, lastSpaceIndex) + '...';
    } else {
      return post;
    }
  };
  return (
    <div>
    <div className='bg-gray-900 w-screen h-screen min-h-screen overflow-x-hidden'>
      <Header />

      <Head>
        <title>CrypticzXI - Blogs</title>

        <meta content={"CrypticzXI - " + "Blogs"} property="og:title" />
        <meta id="embed-desc" property="og:description" content={"Read all of my blogs here!"}></meta>
        <meta name="theme-color" content="#198794"></meta>
        <meta property="og:image" ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta id="image-src" name="twitter:image:src"></meta>
        <meta id="discord" name="twitter:image"></meta>
      </Head>

      <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 pt-16 px-8 gap-16 relative pb-20'>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'></div>
        <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images)]'></div>

        <div className='flex flex-col w-full h-full mt-20'>
          <div className='w-full h-full z-[999]'>
            <div className="h-full w-full flex items-center justify-center space-x-3 mb-16">

              <div className="text-white font-rubik block box-border break-words leading-[45px] w-full transition-all mt-5">

              <a href={`/blog/`} className='border-primary hover:border-secondary mx-2 focus:border-secondary text-white font-rubik whitespace-nowrap py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all md:text-sm text-xs bg-gradient-to-r hover:text-secondary focus:text-secondary border-2 hover:bg-transparent focus:bg-transparent'>
                  All
              </a>

              {tags.map((tags) => (
                <a href={`/blog/tag/${tags.slug.current}`} className='border-primary mx-2 hover:border-secondary focus:border-secondary whitespace-nowrap text-white font-rubik py-[0.35rem] md:px-6 sm:px-4 px-2 rounded-full transition-all md:text-sm text-xs bg-gradient-to-r hover:text-secondary focus:text-secondary border-2 hover:bg-transparent focus:bg-transparent'>
                  {tags?.name}
                </a>
              ))}

              </div>
      
      
            </div>
          </div>
          
          <div className="w-full flex flex-col h-full z-[999] space-y-8">

            
            

            {blogs?.map((blog) => (
            <a href={`/blog/${blog.slug.current}`} key={blog._key} className='w-full lg:h-40 h-[30rem] bg-secondarybackground rounded-xl flex flex-col lg:flex-row shadow-xl overflow-hidden'>
              <div className='IMAGE-AREA w-full lg:w-96 lg:h-full h-[15rem] overflow-hidden'>
                {blog.image ? 
                  <img className="" src={urlFor(blog.image)}></img> :
                  <img className="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images"></img>
                }
              </div>

              <div className='TEXT-AREA p-8 flex flex-col'>
                <h2 className='flex space-x-3 lg:text-2xl text-xl font-poppins uppercase text-secondary font-[700]'>{blog.title}</h2>
                <p className='font-rubik text-white mt-2 break-words'>{limitString(toPlainText(blog.post))}</p>
                <div className="px-4 py-2 bg-background rounded-lg w-max mt-2">
                      <p className="text-white font-poppins text-sm">{readingTime(toPlainText(blog.post)).text}</p>
                    </div>
              </div>

            </a>
            ))}





          </div>
        </div>

      </div>
    </div>
  </div>
    
  )
}


export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug




    const query = `*[_type == "blog" && tagslug == $pageSlug] | order(date desc) {
        title,
        tagslug,
        tags->{
            name,
            slug
        },
        post,
        image,
        slug,
        date,
        portfolio->{
          title
        },
        owninguser->{
          name,
          image
        }
      }`
  const blogs = await sanityClient.fetch(query, { pageSlug })

  console.log(blogs)


  const tags_query = `*[_type == "tags"]{
    name,
    slug,
  }`
const tags = await sanityClient.fetch(tags_query)

  return {
    props: {
      blogs,
      tags
    }
  }
}

export default Portfolio