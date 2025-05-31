import React from 'react'

function BlurScreen() {
  return (
    <div>
        <div className='fixed w-full h-6 backdrop-blur-sm top-0 left-0 '></div>
        <div className='fixed w-full h-6 backdrop-blur-sm bottom-0 left-0 '></div>
        
    </div>
  )
}

export default BlurScreen