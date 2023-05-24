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

        <div className='flex xl:flex-row flex-col min-h-screen xl:px-40 lg:px-36 md:px-20 sm:px-12 pt-16 gap-16 relative pb-20'>
          <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[998] bg-gradient-to-br opacity-100 from-gray-900 to-[rgba(10,10,15,0.2)]'></div>
          <div className='w-full h-full top-0 bottom-0 left-0 right-0 absolute z-[997] bg-cover bg-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images)]'></div>

          <div className="w-full flex flex-col h-full bg-secondarybackground lg:rounded-2xl z-[999] md:mt-20 shadow-xl">

                {blog.image ?
                  <div className="IMAGE-MEDIA w-full h-72 rounded-t-2xl overflow-hidden flex items-center justify-center bg-center bg-cover" style={{backgroundImage: `url(${urlFor(blog.image)})`}}></div> :
                  <div className="IMAGE-MEDIA w-full h-72 rounded-t-2xl overflow-hidden flex items-center justify-center bg-center bg-cover" style={{backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Flow-poly-city-block_a2tuaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=63731ca74bc38c5fcf11558939b9d434bd47bb0c4e194c1a2facad5593c0b49e&ipo=images)`}}></div>
                }

                <div className="TEXT BOX h-full w-full p-8 lg:px-12">

                  <div className="w-full h-full flex">
                    <div className="">
                      <p className='flex space-x-3 lg:text-2xl text-xl font-poppins uppercase text-secondary font-[700] mt-2 '>{blog.title ? blog.title : "This content has been deleted."}</p>
                      <p className="font-poppins text-white mb-7 mt-2">{posted}</p>
                      <div className="flex items-center space-x-7">
                        { blog.owninguser ? 
                        <div className="flex items-center space-x-3">
                          <img className="h-12 rounded-full" src={urlFor(blog?.owninguser?.image)}></img>
                          <p className="font-rubik text-white aspect-video">{blog?.owninguser?.name}</p>
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

                  <Links></Links>
                  
                  
                </div>

          </div>

        </div>
      </div>
    </div>
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
