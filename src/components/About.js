import React from 'react'

function About({image,about}) {
    const originalImage = "https://via.placeholder.com/215" 
  return (
    <aside>
        <img src={image || originalImage } alt='blog logo'/>
        <p>{about}</p>
    </aside>
  )
}

export default About