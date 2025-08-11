import React from 'react'
import smalDollSvg from '../../assets/smal-doll.svg';

function Balance() {

  return (
    <div className='flex justify-center items-center mx-auto gap-1 mb-[40px]'>
      <img className='w-10 h-10' src={smalDollSvg} alt="Small Doll" />
      <p className='text-white text-3xl font-extrabold font-inter leading-loose'>{0}</p>
    </div>
  )
}

export default Balance
        
