import { sanityClient, urlFor } from "../../sanity"
import { formatSizeUnits } from "../../utils"
import Router from 'next/router'
import Head from 'next/head'
import Typewriter from 'typewriter-effect';
import {Header, Links, PortableText} from '../../components';
import moment from 'moment'


const portfolio = ({ 
  portfolio,
  desc,
  images,
  file,
  FileURL,
  posted
}) => {
  var Filesize = formatSizeUnits(FileURL?.size)
  // var Image0 = urlFor(images[0])
  return (
    <div>

        <Header />

      <Head>
        <title>CrypticzXI - {portfolio.title}</title>

        <meta content={"CrypticzXI - " + portfolio.title} property="og:title" />
        <meta id="embed-desc" property="og:description" content={desc}></meta>
        <meta name="theme-color" content="#198794"></meta>
        <meta property="og:image" ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta id="image-src" name="twitter:image:src" ></meta>
        <meta id="discord" name="twitter:image" ></meta>
      </Head>

        

    <div id="canvas" className="fixed w-full hidden min-h-screen aspect-video h-full top-0 z-[999] left-0 overflow-hidden bg-background items-center justify-center">
        <img id="canvas-img" className="w-[80%] h-auto rounded-lg cursor-pointer border-secondary border-2 ring-2 tracker ring-primary group"/>
        <button onClick={() => {document.getElementById("canvas").style.display = "none"}} className="absolute top-10 right-10 space-x-5 h-10 w-auto flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    </div>

      <div className='bg-background overflow-x-hidden'>


        <div className='min-h-screen h-full flex items-center relative mt-28'>
          <div className='w-full h-full absolute flex items-center justify-center blur-2xl opacity-20'>

            <div className='h-72 aspect-square bg-primary rounded-full left-[10rem] top-[10rem] absolute anim-1'></div>
            <div className='h-72 aspect-square bg-required rounded-full left-[35rem] top-[35rem] absolute anim-2'></div>
            <div className='h-36 aspect-square bg-secondary rounded-full left-[60rem] top-[15rem] absolute anim-3'></div>
          </div>


          <div className="w-full h-full z-10 xl:px-40 lg:px-20 md:px-20 px-8 flex flex-col items-start justify-start">
            <h2 className='lg:text-4xl text-3xl font-rubik font-[600] tracking-tight uppercase text-white'>Blog Post</h2>
            <span className="text-sm font-rubik font-[400] tracking-tight text-white my-2">{posted}</span>
            <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-2'></div>
            <div className='flex space-x-3 lg:text-2xl text-xl font-poppins uppercase text-secondary font-[200] mt-2'>
              <p className='text-white font-[400]'>{portfolio.title}</p>
            </div>
            {portfolio.post?
              <div className="text-white font-rubik text-left md:text-base text-sm transition-all mt-10 break-words">
                  <PortableText value={portfolio.post}/>
              </div>
            :null}
            {file?
            <a href={FileURL?.url} download className="bg-secondary rounded-lg py-2 mt-10 p-4 flex items-center hover:translate-y-[3px] focus:translate-y-[3px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-all text-Text text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <div className="flex flex-col pl-4">
                  <p className="font-[400] text-left text-sm text-white font-poppins transition-all">{FileURL?.originalFilename}</p>
                  <p className="font-[200] text-left text-xs font-rubik transition-all text-white">{Filesize}</p>
              </div>
            </a>
            :null}
            <Links />
          </div>
      </div>

      {images && portfolio.image ?

        <div className='grid lg:grid-cols-2 w-full gap-8 grid-cols-1 p-8 mt-10 xl:px-40 lg:px-20 md:px-20'>

        <div onClick={() => {document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(portfolio.image)}`}} className='w-full aspect-video rounded-lg border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative cursor-pointer'>
                <div className="transition-all w-full bg-center bg-cover aspect-video" style={{backgroundImage: `url(${urlFor(portfolio.image)})`}}></div>
        </div>

        {images?.map((image) => (
            <div onClick={() => {document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(image.image)}`}} className='w-full aspect-video rounded-lg cursor-pointer border-secondary border-2 ring-2 tracker ring-primary group overflow-hidden relative'>
                <div className="transition-all w-full bg-center bg-cover aspect-video" style={{backgroundImage: `url(${urlFor(image.image)})`}}></div>
            </div>
        ))}

        </div>
        :
        <div className="my-10"></div>
      }





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
        }
      }`

  const portfolio = await sanityClient.fetch(query, { pageSlug })


  var raw_portfolio = portfolio;
  var title = portfolio?.title;
  var thumbnail = portfolio?.thumbnail;
  var description = portfolio?.description;
  var slug = portfolio?.slug;
  var file = portfolio?.file;
  var owninguser = portfolio?.owninguser;
  var images = portfolio?.images;
  var fileinfo = portfolio?.FileInfo;

  if (!raw_portfolio) {
    raw_portfolio = null
  }
  if (!title) {
    title = null
  }
  if (!thumbnail) {
    thumbnail = null
  }
  if (!description) {
    description = null
  }
  if (!slug) {
    slug = null
  }
  if (!file) {
    file = null
  }
  if (!owninguser) {
    owninguser = null
  }
  if (!images) {
    images = null
  }
  if (!fileinfo) {
    fileinfo = null
  }

  const datetime = moment(portfolio.date).format(("dddd, MMMM Do YYYY, h:mma"));
  console.log(portfolio)
  return {
    props: {
      portfolio: raw_portfolio,
      images: images,
      desc: description,
      posted: datetime
    }
  }
}

export default portfolio
