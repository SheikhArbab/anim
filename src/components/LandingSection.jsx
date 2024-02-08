import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import{ landingSectionText } from '../constants/index'

const LandingSection = () => {
    return (
        <div className='w-full pt-1'>
            <div className="textstructure mt-40 px-20">
                {landingSectionText
                    .map((value, i) => <div
                        key={i}
                        className="masker overflow-hidden ">
                        <div className='w-fit flex'>
                            {i === 1 && <div className='w-[9vw] h-[6vw] duration-300 transition-all bg-green-500 relative top-[1vw] rounded-md'></div>}
                            <h1 className='flex items-center uppercase text-[9vw] leading-[7vw] tracking-tighter font-medium h-full'>{value}</h1>
                        </div>
                    </div>)}
            </div>
            <div className="border-t-[1px] border-zinc-700 mt-20 flex  justify-between items-center py-5 px-20" >
                {["For public and private companies", "From the first pitch to IPO"]
                    .map((v, i) => <p
                        className='text-md font-light tracking-tight leading-none'
                        key={i}>
                        {v}
                    </p>)}

                <div
                    className='uppercase start flex items-center gap-5 border-[1px] border-zinc-500 rounded-full px-5 py-2 text-md font-light'>
                    <span className=''>
                        Start the project
                    </span>
                    <FaArrowUpLong />
                </div>
            </div>
        </div>
    )
}

export default LandingSection
