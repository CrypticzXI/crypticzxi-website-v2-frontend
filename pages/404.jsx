import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Typewriter from 'typewriter-effect';


export default function four0four() {
  return (
    <div>
      <div className='bg-background w-screen h-screen'>

        <div className='w-full h-full my-auto flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-rubik font-[600] tracking-tight uppercase text-white text-center'>Error</h2>
            <div className='border-b-[1px] border-primary w-[18.5rem] mt-2 self-center'></div>
            <div className='flex space-x-3 text-4xl font-rubik uppercase text-secondary font-[200] mt-2 text-center'>
              <Typewriter options={{ strings: ["404, This page could not be found."], autoStart: true, loop: true, }} />
            </div>
            <div className='flex mt-8 items-center'>
              <a href='/' className='bg-primary text-sm text-white font-rubik py-[0.35rem] px-6 rounded-full transition-all bg-gradient-to-r hover:text-primary focus:text-primary border-primary border-2 hover:bg-transparent focus:bg-transparent'>
                Return Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
