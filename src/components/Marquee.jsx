import React from 'react'
import { motion } from 'framer-motion'
import { marqueeText } from '../constants/index'

const Marquee = () => {
    return (
        <div className='w-full h-[50vh] bg-green-900 py-20 rounded-tl-3xl rounded-tr-3xl flex items-center justify-center'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
                {marqueeText
                    .map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: "100%" }}
                            animate={{ x: "-100%" }}
                            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
                            className='text-[10vw] leading-none font-semibold uppercase py-10'
                        >
                            {v}
                        </motion.div>
                    ))}
            </div>

        </div>
    )
}

export default Marquee
