import React from 'react'
// import Youtubee from './Youtubee'

export default function VideoPlay(props) {
  return (
    <div >
        src={`https:www.youtube.com/embed/${props.video.snippet.resourceId.videoId}  ` }
    </div>
  )
}
