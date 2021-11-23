import { SiAboutdotme, SiCodeclimate, SiMaildotru} from "react-icons/si";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import { motion } from "framer-motion"

let animationVar = isMobile === true ? 0 : -62

let iconSize = isMobile === true ? "23" : "35"

const SideBar = () => {
  return (
    <motion.div initial={{x:animationVar, opacity:0}} 
    animate={{x:[0,0,0,0,0,0,animationVar], opacity:1, transitionEnd: {x:animationVar}}}
    transition={{ type: "spring", delay:0.2, duration: 3}} 
    whileHover={{x:0, transition: {duration:0.2}}}
    className="fixed inset-y-0 left-1 md:left-3 h-1/3 md:h-2/5 w-9 sm:w-16 flex flex-col 
    items-center justify-evenly rounded-lg shadow-xl my-auto
    border-white border-8 backdrop-blur-md bg-white">       
        <SideBarIcon icon={<SiAboutdotme size={iconSize} />} link="/about" />
        <SideBarIcon icon={<SiCodeclimate size={iconSize} />} link="/work" />
        <SideBarIcon icon={<SiMaildotru size={iconSize}/>} link="/contact" />
        <SideBarIcon icon={<IoPencil size={iconSize} />} link="/blog"/>
    </motion.div>
  );
};

const SideBarIcon = ({ icon, link, text }) => (
  <Link to={link}>
    <motion.div >
      <motion.div animate={{color:['#FC7015','#393E47']}} 
      whileHover = {{color:'#FC7015', transition:{duration:0.5, delay:0}}} 
      transition={{delay: 1.2, duration:2}} className="sidebar-icon">
        {icon}
      </motion.div>
      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </motion.div>
  </Link>
);


export default SideBar;