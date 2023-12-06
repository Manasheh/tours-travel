import React from 'react'
import video from '../images/video2.mp4'
import ReactPlayer from 'react-player/lazy'
import { NavLink } from 'react-router-dom'
function Video() {

  return (
    <div className='video'>
        <h4>Tours</h4>
        <div className='player'>
            <ReactPlayer url={video} controls className = 'video-play'/>
            <p>
            Embarking on a tour is a thrilling adventure, offering a gateway to discovery and joy.
             Whether navigating city streets, marveling at natural wonders, 
             or immersing in diverse cultures, a tour is a canvas of unforgettable moments. 
             It's an opportunity to create lasting memories, form new connections, and grow personally. 
             The anticipation of the unknown, the thrill of exploration, 
             and the joy of shared experiences make a tour a positively enriching journey for the soul.

            </p>
        </div>
            <NavLink to = '/travel'><button className='hero-btn btn-3'>Visit</button></NavLink>
    </div>
  )
}

export default Video