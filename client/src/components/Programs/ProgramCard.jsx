import React, { useState, useEffect } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import defaultImg from '../../assets/react.svg'
import { Link } from 'react-router-dom';
import './Programs.css';
import { progm } from '../../assets';

function ProgramCard() {


    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.yeswehack.com/programs')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    console.log(data)

    const items = data?.items

    return (
        <div className='grid grid-cols-4 gap-y-12'>
            {
                items?.map((item, i) => (
                    <div className='text-white program-card w-60 h-80 flex gap-1 flex-col justify-between  bg-black rounded-md dark-shadow' key={i}>
                        <div className="py-2 px-3 prog-head border-b-[1px] border-b-secondary flex justify-between items-center">
                            <div className="prog-brand flex overflow-hidden flex-nowrap items-center gap-2">
                                <img src={item.business_unit.logo.url || progm} alt={item.business_unit.logo.original_name} className="brand rounded-full w-9 bg-white" />
                                <h1 className='flex flex-nowrap'>{item.business_unit.name.slice(0, 16)}</h1>
                            </div>
                            <AiOutlineStar />
                        </div>
                        <div className="prog-body py-2 px-3 border-b-[1px] border-b-secondary flex-1">
                            <div className="info flex flex-col gap-4">
                                <h1 className=' font-semibold'>{item.title}</h1>
                                <p className='text-xs pb-5'>{item.business_unit.description.slice(0, 60) + "...."}</p>
                            </div>
                            <div className="prog-reward text-secondary">
                                <p>
                                    {
                                        "$" + item.bounty_reward_min + " - $" + item.bounty_reward_max
                                    }
                                </p>
                                <p className='text-white'>{item.type}</p>
                            </div>
                        </div>
                        <div className="prog-footer flex justify-center items-center p-3">
                            <button className='hover:bg-secondary rounded-md px-4 py-1 border-secondary border-2'>
                                <Link to={`/programs/${item.slug}`}>See Details</Link>
                            </button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProgramCard