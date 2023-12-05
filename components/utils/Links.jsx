import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import Social_Icons from "./Social_Icons";

            
const Links = ({ properties }) => {
    return (            
        <div>
            <div className='flex mt-8 items-center'>
                <a href='/contact/' className='bg-primary text-sm text-white font-rubik py-[0.35rem] px-6 rounded-full transition-all bg-gradient-to-r hover:text-primary focus:text-primary border-primary border-2 hover:bg-transparent focus:bg-transparent'>
                Contact Me
                </a>
                <a href='/portfolio/' className='py-[0.35rem] lg:px-6 px-4 lg:text-sm text-xs text-primary font-rubik font-[400] hover:text-white focus:text-white transition-all'>My Portfolio</a>
                <a href='/blog/' className='py-[0.35rem] lg:text-sm text-xs text-primary font-rubik font-[400] hover:text-white focus:text-white transition-all'>My Blog</a>
            </div>
            <Social_Icons />
        </div>
    )
}

export default Links