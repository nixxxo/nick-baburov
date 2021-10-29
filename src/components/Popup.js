import React from 'react'
import { motion } from 'framer-motion'

function Popup({image}) {
    return (
        <div>
            <motion.button className="text-sm text-gray-50">learn more</motion.button>
            <motion.div style={{display:'none'}} className="w-screen h-screen">
                <img src={image}/>
            </motion.div>
        </div>
    )
}



export default Popup
