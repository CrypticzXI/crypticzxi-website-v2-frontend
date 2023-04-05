import {PortableText} from "../../components"
import { urlFor } from "../../sanity"
const Resume = ({ data }) => {
    return (
        <div className="h-full w-full xl:px-40 lg:px-20 md:px-20 px-4">
            <h2 className='lg:text-4xl text-2xl font-rubik font-[600] tracking-tight uppercase text-white'>About Me</h2>
            <div className='border-b-[1px] border-primary lg:w-[18.5rem] w-[15.4rem] mt-4'></div>
            <h2 className="mt-10 lg:text-2xl text-xl font-poppins font-[600] uppercase text-secondary">A Bit about me...</h2>
            <div className="text-white font-rubik text-left md:text-base text-sm transition-all break-words mt-4">
                <PortableText value={data.desc}/>
            </div>

            {data.skills?
            <div>

              <h1 className="text-secondary text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Skills</h1>

              <div className="text-white font-rubik block box-border break-words leading-[45px] transition-all mt-5">

                  {data.skills.map((skill) => (
                      <div className="bg-secondarybackground px-4 py-2 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                          {skill}
                      </div>
                  ))}

              </div>

            </div>
          :null}

            {data.software?
            <div>

              <h1 className="text-secondary text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Software</h1>

              <div className="text-white font-rubik flex flex-wrap break-words leading-[45px] transition-all items-center mt-5">

                {data.software.map((software) => (
                    <div className="bg-secondarybackground px-4 py-2 max-h-14 h-full rounded-lg mr-[8px] my-2 transition-all flex items-center md:text-base text-sm">
                        <img className="w-auto h-6 mr-2" src={urlFor(software.image)} />
                        {software.name}
                    </div>
                ))}

              </div>

            </div>
          :null}
        </div>
    )
}

export default Resume