import React from 'react'
import {AiTwotoneBug} from 'react-icons/ai'
import '../../index.css'

function WhatCard() {
    const Card = ()=>{
        return(
            <>

            <div className="ser-card flex gap-4 dark-shadow bg-black  text-white flex-col w-[300px] h-[400px] p-4 ">
                <AiTwotoneBug className='text-5xl' />
                <h1 className='text-xl font-semibold text-secondary'>heading</h1>
                <p className="para">drevaed h afERREA SDDFAas aeadsfadf  sfrsdc adf rtER AWSWERTGH AEDA</p>
            </div>
            
            </>
        )
    }
  return (
    <>
        <div className="flex justify-center items-center py-20 gap-12">
            <Card />
            <Card />
            <Card />
        </div>
    </>
  )
}

export default WhatCard