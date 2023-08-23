import React, { useState } from 'react'
import {AiFillApi,AiFillAndroid,AiFillApple,AiOutlineGlobal,} from 'react-icons/ai'

function ScopeTable({data}) {

  return (
    <>
      <div className="scope-table w-[80%] dark-shadow bg-primary ">

        <div className="head bg-black py-10 px-14 ">
          <div className="flex w-full justify-between">
              <h1 className="">Inscope</h1>
              <h1 className="">Inscope</h1>
          </div>
          <ul className=" flex justify-around">
              <li className=""><span className=''>P1</span>$4000 – $7000</li>
              <li className=""><span className=''>P2</span>$2000 – $3500</li>
              <li className=""><span className=''>P3</span>$500 – $1500</li>
              <li className=""><span className=''>P4</span>$200 – $450</li>
          </ul>
          
        </div>
        <div className="scope-items bg-primary py-10 px-14">
            {
              data?.map((scope,i)=>(
                <div className="item flex justify-between items-center py-5" key={i}>
                  <div className="links">
                    <p className="">{scope?.scope}</p>
                  </div>
                  <div className="hardness">
                    <p className=''>{scope?.scope_type}</p>
                    <p className="">{scope?.asset_value}</p>
                   
                  </div>
                </div>
              ))
            }
          </div>
          
      </div>
      {console.log(data)}

    </>
  )
}

export default ScopeTable