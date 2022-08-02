import React from 'react'
import map from '../../assests/map-img.png'
import './venue.css'

const Venue = () => {
  return (
    <div>
      <a href="https://goo.gl/maps/VpfsvwG51dWTGNqo8" target="_blank" rel="noreferrer"><img src={map} alt='map-img' className='map-img'/></a>
    </div>
  )
}

export default Venue
