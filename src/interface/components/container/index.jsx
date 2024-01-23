import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='w-5/6 mx-auto pt-10'>
      { children }
    </div>
  )
}

export default Container