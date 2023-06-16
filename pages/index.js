import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header, Contact, Timeline} from "../components"
import Typewriter from 'typewriter-effect';
import { sanityClient, urlFor } from "../sanity"

const Home = ({
  portfoliodata
}) => {
  return (
    <div>
      <div className='bg-gray-900 w-screen h-screen min-h-screen overflow-x-hidden'>
        
        <Header />
        <Introduction />
        <Border />
        <AboutMe />
        <Border />
        <WhatIDo />
        <Border />
        <MyLatestWork portfoliodata={portfoliodata}/>
        <Border />
        <Contact></Contact>

      </div>
    </div>
    
  )
}


export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == "portfolio"] | order(date desc) {
    title,
    date,
    owninguser->{
      name,
    },
    thumbnail,
    images,
    slug
  }[0...3] `
  const portfoliodata = await sanityClient.fetch(query)

  return {
    props: {
      portfoliodata
    }
  }
}

export default Home