import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header} from "../components"
import Typewriter from 'typewriter-effect';
import { sanityClient, urlFor } from "../sanity"

const Home = ({
  portfoliodata
}) => {
  return (
    <div>




      <div className='bg-background w-screen h-screen min-h-screen overflow-x-hidden'>

        <Header />
        <Introduction />
        <Border />
        <AboutMe />
        <Border />
        <WhatIDo />
        <Border />
        <MyLatestWork portfoliodata={portfoliodata}/>
        <Border />





      </div>
    </div>
    
  )
}


export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == "portfolio"][0...3]{
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

export default Home