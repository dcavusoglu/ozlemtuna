import React from 'react'
import './footer.css'

const footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className='footer'>
      <p className='center-p'>made with 🧡</p>
      <span> © {year} DC development</span>
    </div>
  )
}

export default footer
