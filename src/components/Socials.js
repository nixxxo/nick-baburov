import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { BsGithub, BsInstagram, BsDiscord, BsTwitter } from "react-icons/bs"

let iconSize = isMobile === true ? "20" : "22"

function Socials() {
    return (
        <div className="flex flex-row mt-2">
            <SocialIcon icon={<BsGithub size={iconSize} />}/>
            <SocialIcon icon={<BsInstagram size={iconSize} />}/>
            <SocialIcon icon={<BsDiscord size={iconSize} />}/>
            <SocialIcon icon={<BsTwitter size={iconSize} />}/>
        </div>
    )
}

const SocialIcon = ({ icon, link }) => (
    <Link to={link}>
      <div className="pr-2">
        <motion.div whileHover = {{color:'#8ab9ff', transition:{duration:0.5, delay:0}}}>
          {icon}
        </motion.div>
      </div>
    </Link>
  );

export default Socials
