import React from 'react'
import smalDollSvg from '../../assets/smal-doll.svg';
import { selectClaimBalance } from '../../redux/exampleReducer/gamesValues.selectors';
import { useSelector } from 'react-redux';

function Balance() {

  const balance = useSelector(selectClaimBalance);

  return (
    <div className='flex justify-center items-center mx-auto gap-1 mb-[20px]'>
      <img className='w-10 h-10' src={smalDollSvg} alt="Small Doll" />
      <p className='text-white text-3xl font-extrabold font-inter leading-loose'>{balance}</p>
    </div>
  )
}

export default Balance
        
