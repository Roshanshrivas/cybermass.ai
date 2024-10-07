import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='bg-gradient-to-b from-[#C276F0] to-[#993ef9] text-transparent bg-clip-text font-bold'>
     {" "}
     {text} 
    </span>
  )
}

export default HighlightText