import { sanityClient, urlFor } from "../../sanity"
import { formatSizeUnits } from "../../utils"
import Router from 'next/router'
import Head from 'next/head'
import Typewriter from 'typewriter-effect';
import {Header, Links, PortableText2} from '../../components';
import moment from 'moment'
const readingTime = require('reading-time');
import { toPlainText } from '@portabletext/react';


const portfolio = ({ 
  blog,
  FileURL,
  posted
}) => {
  var Filesize = formatSizeUnits(FileURL?.size)
  // var Image0 = urlFor(images[0])
  const stats = readingTime(toPlainText(blog.post));
  return (

    // Redo
    <div>
      <div className='bg-gray-900 w-screen h-screen min-h-screen overflow-x-hidden'>
        <Header />

        <Head>
          <title>CrypticzXI - {blog.title}</title>

          <meta content={"CrypticzXI - " + blog.title} property="og:title" />
          <meta id="embed-desc" property="og:description" content={toPlainText(blog.post)}></meta>
          <meta name="theme-color" content="#198794"></meta>
          <meta property="og:image" ></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta id="image-src" name="twitter:image:src" ></meta>
          <meta id="discord" name="twitter:image" ></meta>
        </Head>

        <div id="canvas" className="fixed w-full hidden min-h-screen max-h-full aspect-video h-full p-8 top-0 z-[1080] left-0 overflow-hidden bg-background items-center justify-center">
          <img id="canvas-img" className="w-auto h-full rounded-lg cursor-pointer border-secondary border-2 ring-2 tracker ring-primary group"/>
          <button onClick={() => {document.getElementById("canvas").style.display = "none"}} className="absolute top-10 right-10 space-x-5 h-10 w-auto flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </button>
        </div>

        <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 pt-16 px-8 gap-16 relative pb-20'>
          <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'></div>
          <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images)]'></div>

          <div className="w-full flex flex-col h-full bg-secondarybackground rounded-2xl z-[999] mt-20 shadow-xl">

                <div className="IMAGE-MEDIA w-full h-72 rounded-t-2xl overflow-hidden flex items-center justify-center">
                  {blog.image ? 
                    <img className="" src={urlFor(blog.image)}></img> :
                    <img className="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images"></img>
                  }
                </div>

                <div className="TEXT BOX h-full w-full p-8 px-12">

                  <div className="w-full h-full flex">
                    <div className="">
                      <p className='flex space-x-3 lg:text-2xl text-xl font-poppins uppercase text-secondary font-[700] mt-2 '>{blog.title ? blog.title : "This content has been deleted."}</p>
                      <p className="font-poppins text-white mb-7 mt-2">{posted}</p>
                      <div className="flex items-center space-x-7">
                        { blog.owninguser ? 
                        <div className="flex items-center space-x-3">
                          <img className="h-12 rounded-full" src={urlFor(blog?.owninguser?.image)}></img>
                          <p className="font-rubik text-white ">{blog?.owninguser?.name}</p>
                        </div> :
                        <p className="font-rubik text-white">Anonymous</p>
                        }
                      </div>
                    </div>
                    <div className="flex-grow hidden lg:flex"></div>
                    <div className="items-center hidden lg:flex">
                      <div className="px-4 py-2 bg-background rounded-lg">
                        <p className="text-white font-poppins text-sm">{stats.text}</p>
                      </div>
                    </div>
                  </div>

                  {blog.post?
                    <div className="text-white font-rubik text-left md:text-base text-sm transition-all mt-5 break-words break-sentences-up">
                        <PortableText2 value={blog.post}/>
                    </div>
                  :null}

                  {blog.images ? 
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 transition-all">
                      {blog.images.map((image) => (
                          <div onClick={() => {document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(image)}`}} className='w-full aspect-video rounded-lg cursor-pointer border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative'>
                              <div className="transition-all w-full bg-center bg-cover aspect-video" style={{backgroundImage: `url(${urlFor(image)})`}}></div>
                          </div>
                      ))}
                    </div>
                  : null }
                  
                  
                </div>

          </div>

        </div>
      </div>
    </div>





































    // <div>

    //     <Header />

    //   <Head>
    //     <title>CrypticzXI - {portfolio.title}</title>

    //     <meta content={"CrypticzXI - " + portfolio.title} property="og:title" />
    //     <meta id="embed-desc" property="og:description" content={desc}></meta>
    //     <meta name="theme-color" content="#198794"></meta>
    //     <meta property="og:image" ></meta>
    //     <meta name="twitter:card" content="summary_large_image"></meta>
    //     <meta id="image-src" name="twitter:image:src" ></meta>
    //     <meta id="discord" name="twitter:image" ></meta>
    //   </Head>

        

    // <div id="canvas" className="fixed w-full hidden min-h-screen aspect-video h-full top-0 z-[999] left-0 overflow-hidden bg-background items-center justify-center">
    //     <img id="canvas-img" className="w-[80%] h-auto rounded-lg cursor-pointer border-secondary border-2 ring-2 tracker ring-primary group"/>
    //     <button onClick={() => {document.getElementById("canvas").style.display = "none"}} className="absolute top-10 right-10 space-x-5 h-10 w-auto flex items-center">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //         </svg>
    //     </button>
    // </div>

    //   <div className='bg-background overflow-x-hidden'>


    //     <div className='min-h-screen h-full flex items-center relative mt-28'>
    //       <div className='w-full h-full absolute flex items-center justify-center blur-2xl opacity-20'>

    //         <div className='h-72 aspect-square bg-primary rounded-full left-[10rem] top-[10rem] absolute anim-1'></div>
    //         <div className='h-72 aspect-square bg-required rounded-full left-[35rem] top-[35rem] absolute anim-2'></div>
    //         <div className='h-36 aspect-square bg-secondary rounded-full left-[60rem] top-[15rem] absolute anim-3'></div>
    //       </div>


    //       <div className="w-full h-full z-10 xl:px-40 lg:px-20 md:px-20 px-8 flex flex-col items-start justify-start">
    //         <h2 className='lg:text-4xl text-3xl font-rubik font-[600] tracking-tight uppercase text-white'>Blog Post</h2>
    //         <span className="text-sm font-rubik font-[400] tracking-tight text-white my-2">{posted}</span>
    //         <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-2'></div>
    //         <div className='flex space-x-3 lg:text-2xl text-xl font-poppins uppercase text-secondary font-[200] mt-2'>
    //           <p className='text-white font-[400]'>{portfolio.title}</p>
    //         </div>
    //         {portfolio.post?
    //           <div className="text-white font-rubik text-left md:text-base text-sm transition-all mt-10 break-words">
    //               <PortableText2 value={portfolio.post}/>
    //           </div>
    //         :null}
    //         {file?
    //         <a href={FileURL?.url} download className="bg-secondary rounded-lg py-2 mt-10 p-4 flex items-center hover:translate-y-[3px] focus:translate-y-[3px] transition-all">
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all text-Text text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    //           </svg>
    //           <div className="flex flex-col pl-4">
    //               <p className="font-[400] text-left text-sm text-white font-poppins transition-all">{FileURL?.originalFilename}</p>
    //               <p className="font-[200] text-left text-xs font-rubik transition-all text-white">{Filesize}</p>
    //           </div>
    //         </a>
    //         :null}
    //         <Links />
    //       </div>
    //   </div>

    //   {images && portfolio.image ?

    //     <div className='grid lg:grid-cols-2 w-full gap-8 grid-cols-1 p-8 mt-10 xl:px-40 lg:px-20 md:px-20'>

    //     <div onClick={() => {document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(portfolio.image)}`}} className='w-full aspect-video rounded-lg border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative cursor-pointer'>
    //             <div className="transition-all w-full bg-center bg-cover aspect-video" style={{backgroundImage: `url(${urlFor(portfolio.image)})`}}></div>
    //     </div>

    //     {images?.map((image) => (
    //         <div onClick={() => {document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(image.image)}`}} className='w-full aspect-video rounded-lg cursor-pointer border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative'>
    //             <div className="transition-all w-full bg-center bg-cover aspect-video" style={{backgroundImage: `url(${urlFor(image.image)})`}}></div>
    //         </div>
    //     ))}

    //     </div>
    //     :
    //     <div className="my-10"></div>
    //   }





    //     </div>
    // </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[ _type == "blog" && slug.current == $pageSlug][0]{
        title,
        post,
        image,
        slug,
        date,
        portfolio->{
          title
        },
        owninguser->{
          name,
          image,
          desc
        },
        images
      }`

  const blog = await sanityClient.fetch(query, { pageSlug })


  const datetime = moment(portfolio.date).format(("MMM Do, YYYY"));
  console.log(portfolio)
  return {
    props: {
      blog,
      posted: datetime
    }
  }
}

export default portfolio
