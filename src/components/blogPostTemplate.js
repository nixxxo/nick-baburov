import React, { useState } from 'react';
import SideBar from './components/Sidebar.js';
import Pagetran from './components/Pagetran';
import { isMobile } from 'react-device-detect';
import { motion } from "framer-motion"
import Socials from './components/Socials.js';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import Work from '../Work.jsx';

function blogPostTemplate({heading, body, footer}) {
    
    return (
        <div>
            <Route path={heading.toLowerCase().replace(" ", "-")} exact component={() => <Work />} />
            <SideBar className="flex"/>
            <Pagetran classNames="bg-gray-100 h-full" other_div={
                <div>
                    <div id="blog-header">
                        <h1>{heading}</h1>
                    </div>
                    <div id="blog-body">
                        {body}
                    </div>
                    <div id="blog-footer">
                        {footer}
                    </div>
                </div>
            }/>
        </div>
    )

}

export default blogPostTemplate