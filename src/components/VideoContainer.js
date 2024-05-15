import React, { useEffect, useState } from 'react'
import { YT_VDO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  },[])
  const getVideos = async () => {
    try {
      const response = await fetch(YT_VDO_API);
      const data = await response.json();
      // console.log(data.items[0].snippet.title);
      setVideos(data.items);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-wrap gap-4'>
      {videos.length > 0 && videos.map((video) => {
        return <VideoCard key={video.id} info={video}/>
      })}
      
      
    </div>
  )
}

export default VideoContainer
