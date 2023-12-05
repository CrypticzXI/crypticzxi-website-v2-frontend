import { PortableText2 } from ".."
import { useEffect, useState } from 'react';
import { urlFor } from "../../sanity"
import { Arced } from "../Gauges/arced";
import IllustratorLogo from "../../public/SVG/IllUstrator.svg"
import Image from "next/image";

const Resume = () => {
  const [AboutMe, setAboutMe] = useState([]);

  useEffect(() => {

    const getProfile = async () => {
      const res = await fetch('/api/aboutme', { headers: { 'Content-Type': 'application/json' } });
      const data = await res.json();
      setAboutMe(data);
    };

    getProfile();
  }, []);

  const renderAboutMe = () => {
    return AboutMe.Bio ? AboutMe.Bio.map((data, index) => {
      return (
        <p key={index} className="py-2">{data}</p>
      );
    }) : null;
  };

  const renderSkills = () => {
    return AboutMe.Skills ? AboutMe.Skills.map((data, index) => {
      return (
        <div key={index} className="bg-secondarybackground px-4 py-2 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
          {data}
        </div>
      );
    }) : null;
  };

  const renderSoftware = () => {
    return AboutMe.Software ? AboutMe.Software.map((data, index) => {
      return (
        <div key={index} className="bg-secondarybackground px-4 py-2 max-h-14 h-full rounded-lg mr-[8px] my-2 transition-all flex items-center md:text-base text-sm">
          {data}
        </div>
      );
    }) : null;
  };

  const renderStrengths = () => {
    console.log(AboutMe.Strengths)
    return AboutMe.Strengths ? AboutMe.Strengths.map((data, index) => {
      return (
        <div key={index} className="h-56 w-56 mx-auto flex px-8 py-0 items-center justify-center">
              <Arced value={data.Value} />
              <img className="absolute translate-y-1 w-16" alt={data.Alt} src={data.Image}/>
            </div>
      );
    }) : null;
  };





  return (
    <div className="h-full w-full xl:px-40 lg:px-20 md:px-20 px-4 my-20">
      <h2 className='lg:text-4xl text-2xl font-rubik font-[600] tracking-tight uppercase text-white'>About Me</h2>
      <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-4'></div>
      <h2 className="mt-10 lg:text-2xl text-xl font-poppins font-[600] uppercase text-secondary">A Bit about me...</h2>
      <div className="text-white font-rubik text-left md:text-base text-sm transition-all break-words mt-4">
        {renderAboutMe()}
      </div>

      <div>
        <h1 className="text-secondary text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Strengths</h1>

          <div className="grid w-full mt-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-col lg:grid-rows-1 md:grid-rows-2 grid-rows-4 transition-all">
            {renderStrengths()}
          </div>


      </div>

      <div>

        <h1 className="text-secondary text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Skills</h1>

        <div className="text-white font-rubik block box-border break-words leading-[45px] transition-all mt-5">

          {renderSkills()}

        </div>

      </div>

      <div>

        <h1 className="text-secondary text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Software</h1>

        <div className="text-white font-rubik flex flex-wrap break-words leading-[45px] transition-all items-center mt-5">

          {renderSoftware()}

        </div>

      </div>
    </div>
  )
}

export default Resume