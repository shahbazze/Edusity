import React, { useRef } from 'react'
import "./Videoplayer.css"
import college_video from "../../assets/edusity_assets/college.mp4"
const VideoPlayer = ({playstate,setplaystate}) => {
  const player=useRef(null);
  const closedplayer=()=>{
    if(e.target=player.current)
      {
        setplaystate(false);
      }
  }
  return (
    <div className={`Video-player hide ${playstate ?'':'hide'}`} ref={player} onClick={closedplayer}>
        <video src={college_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer