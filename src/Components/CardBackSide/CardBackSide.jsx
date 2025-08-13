import React from 'react'

function CardBackSide({getIcon,cell}) {
  return (
     <div className="absolute flex flex-col justify-center items-center rounded-xl bg-gray-800 text-white backface-hidden rotate-y-180">
      <img src={getIcon(cell)} alt={cell.type} />
      {cell.type === "cash" && (
        <span className="absolute bottom-1 text-white text-base font-bold font-inter leading-tight">
          {cell.value}
        </span>
      )}
    </div>
  )
}

export default CardBackSide