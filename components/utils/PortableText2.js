
import { PortableText } from '@portabletext/react'
import { urlFor, GetFileUrl } from "../../sanity"
import { Document, Page } from '@react-pdf/renderer';
import React from 'react';


const myPortableTextComponents = {
  types: {
    image: ({ value }) => <img className='max-w-xl' onClick={() => { document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(value)}` }} src={urlFor(value)} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="">{value.text}</div>
      ),
    rawHTML: ({ value }) => (
      <div dangerouslySetInnerHTML={{ __html: value.html }} />
    ),
    pdf: ({ value }) => (
      <div className="pdf-container aspect-[1/1.4142] h-full w-full mb-16">
        <iframe className='w-auto h-full aspect-[1/1.4142]' src={GetFileUrl(value).url}></iframe>
      </div>
    )
    },
    list: {
      bullet: ({ children }) => <ul className="pl-10">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    },

    marks: {
      em: ({ children }) => <em className="text-gray-600 font-semibold">{children}</em>,
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} className="text-secondary hover:text-primary transition-all" rel={rel}>
            {children}
          </a>
        )
      },
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      h5: ({ children }) => <h1 className="text-2xl font-[700] my-2">{children}</h1>,
      h6: ({ children }) => <h1 className="text-xl font-[500] my-2">{children}</h1>,
      blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      normal: ({ children }) => children != "" ? (<p>{children}</p>) : (<p className="my-5"></p>),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    hardBreak: {

    }
  }

const PortableText2 = (props) => {
    console.log(props)
    return <PortableText value={props.value} components={myPortableTextComponents} />
  }

export default PortableText2
