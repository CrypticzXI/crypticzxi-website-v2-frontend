import Head from 'next/head'
import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header, Contact, Resume} from "../../components"
import Typewriter from 'typewriter-effect';
import { sanityClient, urlFor } from "../../sanity"

const Home = ({
  portfoliodata
}) => {
  console.log(portfoliodata)
  return (
    <div>




      <div className='bg-background overflow-hidden'>

        <Header />
        <Introduction /> 
        <Border />
        <Resume data={portfoliodata.aboutme} />
        <Border />
        <Contact></Contact>





      </div>
    </div>
    
  )
}


export const getServerSideProps = async (pageContext) => {
  const query = `*[ _type == "account"][0]{
    name,
    desc,
    image,
    banner,
    aboutme,
    resume,
    slug,
    contactme,
    links
  }`
  const portfoliodata = await sanityClient.fetch(query)

  return {
    props: {
      portfoliodata
    }
  }
}

export default Home