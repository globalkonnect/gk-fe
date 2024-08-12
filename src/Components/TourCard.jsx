import React from 'react'
import { allAssets } from '../Utility/baseAssets'
function TourCard() {
    const card1 = allAssets.northEI
    const card2 = allAssets.Dubai
    const card3 = allAssets.Thailand
    const cards = [card1,card2,card3]
  return (
    <div className='flex items-center justify-evenly rounded-3xl'>
{cards.map((value,index)=>{return (<img key={index} src= {value} className='m-5 rounded-3xl'/>)})  }
    </div>
  )
}

export default TourCard