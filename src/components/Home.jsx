import React from 'react'
import Gallery from './Gallery'

function Home() {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-white text-6xl font-sans'>K BHASKAR</h1>
      <p>Everyone uses a pencil as a tool. But I made the pencil into a rare piece of art!</p>
      <Gallery></Gallery>
    </div>
  )
}

export default Home