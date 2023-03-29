import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {Introduction, Border, AboutMe, WhatIDo, Links, MyLatestWork, Header, Contact} from "../components"
import Typewriter from 'typewriter-effect';
import { sanityClient, urlFor } from "../sanity"

const Home = ({
}) => {
  return (
    <div>




      <div className='bg-background w-screen h-screen min-h-screen overflow-x-hidden'>

        <Header />
        <Contact />





      </div>
    </div>
    
  )
}

export default Home