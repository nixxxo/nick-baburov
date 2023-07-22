import React from 'react'
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

let iconSize = isMobile === true ? "20" : "22"

function Socials() {
    return (
        <div className="flex flex-row mt-2">
            <SocialIcon link={"https://github.com/nixxxo"} icon={<BsGithub size={iconSize} />}/>
            <SocialIcon link={"https://www.instagram.com/nik.bbrv/"} icon={<BsInstagram size={iconSize} />}/>
            <SocialIcon link={"https://www.linkedin.com/in/nick-baburov/"} icon={<BsLinkedin size={iconSize} />}/>
            <SocialIcon link={"https://twitter.com/nix0dev"} icon={<BsTwitter size={iconSize} />}/>
        </div>
    )
}

const SocialIcon = ({ icon, link }) => (
    <a href={link}>
      <div className="pr-2">
        <motion.div whileHover = {{color:'#8ab9ff', transition:{duration:0.5, delay:0}}}>
          {icon}
        </motion.div>
      </div>
    </a>
  );

export default Socials
