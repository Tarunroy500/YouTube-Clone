import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='flex justify-between p-3 items-center'>
        <div className='flex justify-evenly gap-4 items-center' >
          <img onClick={()=> toogleMenuHandler()} className='h-16' src='https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg' alt='menu' />
          <img className='h-20' src='https://th.bing.com/th/id/R.d2aedc52eb143ef84f904d37b27aef66?rik=%2bDiyLWU2LhvU1A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fyoutube%2fyoutube_PNG13.png&ehk=qywyUAgWwEMAZ%2b0vs49sqYw8LuzfLQMKpn3kF33PSIg%3d&risl=&pid=ImgRaw&r=0' alt='youtube' />
        </div>

        <div className='flex items-center gap-4'>
          <input className='border border-gray-950 w-100 rounded-lg' type='text' placeholder='Search' />
          <img className='h-6' src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='search' />
          <img className='h-6' src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3247450/mic-icon-md.png' alt='mic' />

        </div>

        <div className='flex items-center'>
          <img className='h-10' src='https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png' alt='profile' />
        </div>

    </div>
  )
}

export default Head
