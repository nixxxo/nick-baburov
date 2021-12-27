import React from 'react'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'


const pageTrans = {
    from:{opacity:0},
    to:{opacity:1},
    out:{color:"red"}
  }


function Pagetran({ other_div, classNames, ref }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
            ref={ref}
            className={classNames}
            initial="from"
            animate="to"
            exit="out"
            variants={pageTrans}
            transition={{duration:1}}>
                {other_div}
            </motion.div>
        </AnimatePresence>
    )
}

export default Pagetran
