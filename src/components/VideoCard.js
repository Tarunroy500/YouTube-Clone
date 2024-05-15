import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className=''>
      <img src={thumbnails.medium.url} alt={title}/>
      <div className='w-64'>
        <h1>{title}</h1>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} Views</p>
      </div>

    </div>
  )
}

export default VideoCard
