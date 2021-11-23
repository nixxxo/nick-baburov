import React, { useState } from 'react';
import { motion } from 'framer-motion'

function Popup({image}) {

    var displayMode = "none"

    // const [display, setDisplay] = useState(display);


    return (
        <div>
            <motion.button className="text-sm text-gray-50">see</motion.button>
            <motion.div style={{display:displayMode}} className="w-screen h-screen">
                <img src={image}/>
            </motion.div>
        </div>
    )
}



export default Popup
