import React from 'react'
import Card from './Card'
export default function Tour({tourData,removeTour}) {
  
  return (
    <>
        <h1 className='border-dashed border-4 py-2 px-1 text-2xl w-56 mx-auto text-center'>Plan With Harshit</h1>
        {tourData.map((obj)=>(<Card {...obj} removeTour={removeTour}/>))}

    </>
  )
}
