import React from 'react'
import { aboutText } from '../constants/index'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-[4vw] '>{aboutText[0]}</h1>
            <div className='w-full border-t-[1px] border-[#a1b562] mt-20 pt-10'>
                <div className='w-1/2 text-4xl'>
                    <h1>{aboutText[1]}</h1>
                    <button
                        className='px-6 py-3 bg-zinc-900 rounded-full text-white mt-10'
                        onClick={() => window.open(aboutText[2].link, "_blank")}>
                        {aboutText[2].text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
