import React, { useState, useRef, setState} from 'react';
import SideBar from './components/Sidebar.js';
import Pagetran from './components/Pagetran';
import { isMobile } from 'react-device-detect';
import { motion, useAnimation } from "framer-motion"
import Socials from './components/Socials.js';

const Work = (params) => {

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const buttonStart = useRef(null); 

    const fullScreenAnim = useAnimation()
    const fullScreen = useRef(null); 

    const movieDiv = useRef(null);
    const movieDivAnim = useAnimation()

    const movieStartCredits1 = useAnimation()
    const movieStartCredits2 = useAnimation()
    const movieStartCredits3 = useAnimation()

    function movieTime () {
        console.log("button")
        console.log(buttonStart.current);
        fullScreenAnim.start({
            backgroundColor: "#ffffff",
            transition: {duration: 2}
        });
        fullScreen.current.style.display = 'none';
        movieDiv.current.style.display = 'flex';

        movieDivAnim.start({
            backgroundColor: ["#ffffff", "#000000"],
            transition: { duration: 2 },
        });

        movieStartCredits1.start({
            opacity: [0,1,0],
            display:['block','none'],
            transition:{
                delay: 2,
                duration:3.5
            },
        })
        movieStartCredits2.start({
            opacity: [0,1,0],
            display:['block','none'],
            transition:{
                delay: 6,
                duration:4
            },
        })
        movieStartCredits3.start({
            opacity: [0,1,0],
            display:['block','none'],
            transition:{
                delay: 10,
                duration:4
            },
        })

    };

    return (
        <div>
            <motion.div ref={fullScreen} animate={fullScreenAnim}>
                <SideBar className="flex"/>
                <Pagetran classNames="bg-gray-100 h-screen" other_div={
                    <div ref={buttonStart} className="flex flex-col bg-gray-100 ">
                        <div className="flex flex-col justify-center items-center mb-10">
                            <h1 className="font-neo pt-12 text-5xl text-gray-800 text-center font-bold">work</h1>
                            <span className="mt-2 px-14 text-center text-gray-800 text-base italic font-mono">showcase</span>
                        </div>
                        <div className='h-96 flex flex-col items-center  justify-center '>
                            <motion.button
                            onClick={movieTime}
                            className='transition-all duration-200 text-gray-800 border-2 md:border-4 border-gray-800 hover:text-white hover:bg-gray-800 rounded-xl py-3 px-6 md:py-4 md:px-10 text-xl md:text-4xl'
                            >Start</motion.button>
                        </div>
                    </div>
                }/>
            </motion.div>
            <motion.div ref={movieDiv} animate={movieDivAnim}
             className='hidden h-screen items-center justify-center bg-black'>
                 <div className='absolute'>
                     <motion.h1 animate={movieStartCredits1} className='font-neo text-white text-3xl'>Shh...🤫</motion.h1>
                 </div>
                 <div className='absolute'>
                     <motion.h1 animate={movieStartCredits2} className='font-neo text-white text-3xl'>Turn off all electronics.</motion.h1>
                 </div>
                 <div className='absolute'>
                     <motion.h1 animate={movieStartCredits3} className='font-neo text-white text-3xl'>Oops! Still not ready, expect soon...</motion.h1>
                 </div>
            </motion.div>
        </div>
    );
}

export default Work