import React from "react";
import { Introduction, Border, Header, Contact, Resume } from "../../components"
import { sanityClient } from "../../sanity"

const Home = ({
  portfoliodata
}) => {
  return (
    <div>
      <div className='bg-background overflow-hidden'>
        <Border />
        <Header />
        <Introduction />
        <Border />
        <Resume data={portfoliodata.aboutme} />
        <Border />
        <Contact></Contact>
        <Border />
      </div>
    </div>

  )
}

export const getServerSideProps = async (pageContext) => {
  const query = `*[ _type == "account"][0]{
    desc,
    aboutme,
    resume,
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