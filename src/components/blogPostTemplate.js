import React, { useState } from 'react';
import SideBar from './components/Sidebar.js';
import Pagetran from './components/Pagetran';
import { isMobile } from 'react-device-detect';
import { motion } from "framer-motion"
import Socials from './components/Socials.js';

function blogPostTemplate({Heading, }) {
    
    return (
        <div>
            <SideBar className="flex"/>
            <Pagetran classNames="bg-gray-100 h-full" other_div={

            }/>
        </div>
    )

}