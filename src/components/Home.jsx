import React from 'react'
import Post from './Post'

const Home = () => {

  return (
        <>
            <div className='container p-4'>
                <h1 className='display-1 text-center'>Single Page Application</h1>
                <Post/>
            </div>
        </>
  )
}

export default Home