import React, { useState, useEffect } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import defaultImg from '../../assets/react.svg'
import './Programs.css';

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
        <div className='flex flex-wrap gap-5'>
            {
                items?.map((item, i) => (
                    <div className='program-card w-60 h-80 flex gap-1 flex-col justify-between p-3 bg-slate-500 ' key={i}>
                        <div className="prog-head flex justify-between items-center">
                            <div className="prog-brand flex overflow-hidden flex-nowrap items-center gap-1">
                                <img src={item.business_unit.logo.url || defaultImg} alt={item.business_unit.logo.original_name} className="brand rounded-full w-9 bg-white" />
                                <h1 className=''>{item.business_unit.name}</h1>
                            </div>
                            <AiOutlineStar />
                        </div>
                        <div className="prog-body flex-1">
                            <div className="info">
                                <h1>{item.title}</h1>
                                <p>{item.business_unit.description.slice(0, 40) + "...."}</p>
                            </div>
                            <div className="prog-reward">
                                <p>
                                    {
                                        "$" + item.bounty_reward_min + "-" + item.bounty_reward_max
                                    }
                                </p>
                                <p>{item.type}</p>
                            </div>
                        </div>
                        <div className="prog-footer">
                            <button>see details</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProgramCard