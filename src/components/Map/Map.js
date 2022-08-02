import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import marker from '../../assests/place-marker.png'


const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={marker} alt='marker' className="pin-icon"/>
    <p className="pin-text">{text}</p>
  </div>
)


const Map = ({ location, zoomLevel }) => {

  return (
    <div className="map">
    <h2 className="map-h2">Buluşma noktamız</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
    </div>
  )
}

export default Map
