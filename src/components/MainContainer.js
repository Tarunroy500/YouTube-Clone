import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='p-6 flex flex-col gap-4'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
