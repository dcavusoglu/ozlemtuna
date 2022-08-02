import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import invitation from '../../assests/invitation.png'
import Contact from '../../components/Contact/contact'
import './story.css'
// import Map from '../Map/Map'
import Venue from '../Venue/Venue'

// const location = {
//   address: 'Boğazkent Mah, 20. Sk., Kepez',
//   lat: 40.103888,
//   lng: 26.393718,
// }

const Story = () => {
  return (
    <Accordion defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0" className='acr-item'>
        <Accordion.Header>Davetlisiniz!</Accordion.Header>
        <Accordion.Body>
          <img alt='davetiye' src={invitation} className='inv-img'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='acr-item'>
        <Accordion.Header>Hikayemiz</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='acr-item'>
        <Accordion.Header>Organizasyon Yeri</Accordion.Header>
        <Accordion.Body >
          <Venue/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='acr-item'>
        <Accordion.Header>İletişim</Accordion.Header>
          {/* <Map location={location} zoomLevel={18}/> */}
        <Accordion.Body>
          <Contact/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Story
