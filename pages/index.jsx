import React from "react";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header, Contact, Timeline} from "../components"
import { sanityClient } from "../sanity"
import RootBar_Top from '../components/utils/RootBar_Top';
import Footer from "../components/Footer";

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
        <MyLatestWork portfoliodata={portfoliodata}/>
        <Border />
        <Contact></Contact>
        <RootBar_Top/>
        <Footer />

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

// TODO Make this function moduar at some point

export default Home