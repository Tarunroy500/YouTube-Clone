import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen){
    return null;
  }
  return (
    <div className=''>
      <div className=''>
      <div className='flex flex-col justify-evenly gap-3 p-4'>
        <h1>Home</h1>
        <h1>Shorts</h1>
        <h1>Subscription</h1>
      </div>
      <div className='flex flex-col justify-evenly gap-3 p-4'>
        <h1 className='font-bold'>You</h1>
        <h1>Your Channel</h1>
        <h1>History</h1>
        <h1>PlayList</h1>
        <h1>Watch Later</h1>
        <h1>Like Videos</h1>
      </div>
      <div className='flex flex-col justify-evenly gap-3 p-4'>
        <h1 className='font-bold'>Explore</h1>
        <h1>Trending</h1>
        <h1>Shopping</h1>
        <h1>Music</h1>
        
      </div>

      </div>
    </div>
  )
}

export default SideBar
