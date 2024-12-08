import React from 'react'
import { useState } from 'react'

function Card({id,name,info,image,price,removeTour}) {
  const [clk,changeClk]=useState(false);
  const [des,changeDes]=useState(`${info.substring(0,200)}...`)
  function change(){
    if(clk){
      changeDes(`${info.substring(0,200)}...`)
    }
    else{
      changeDes(info)
    }
    changeClk(prevClk=>!prevClk)
  }
  return (
    <>
        <div className={`w-72 h-auto mx-auto my-6 ${id}`}>
            <img className='w-full h-auto rounded-lg' src={image}  />
            <h1 className='text-2xl'>{name}</h1>
            <h4 className='text-lg text-white'>{des}<span onClick={change} className='text-blue-500 cursor-pointer'>{clk?'Show Less':'Show More'}</span></h4>
            <h4 className='text-lg text-pink-700'>Price:{price}</h4>
            <button className='rounded-lg bg-white text-black px-2 py-2 cursor-pointer' onClick={(e)=>{removeTour(id)}}>Not Interested</button>
        </div>
    </>
  )
}

export default Card