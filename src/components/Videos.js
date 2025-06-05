import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
const Videos = () => {
  return (
    <div>
       <div className="flex mt-10 justify-center bg-gray-100">
                  <video autoPlay loop muted className="runded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                  <source src={video1} type="video/mp4 "/>
                  Your browser does not support the video tag.
                  </video> 
      
                  <video autoPlay loop muted className="runded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                  <source src={video2} type="video/mp4 "/>
                  Your browser does not support the video tag.
                  </video> 
              </div>
    </div>
  )
}

export default Videos
 