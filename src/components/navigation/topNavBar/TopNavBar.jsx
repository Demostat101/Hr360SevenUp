import React from 'react'
import Pic from '/src/assets/download.jpg'

const TopNavBar = () => {
  return (
    <div>
      <div >
        <div>Welcome To Sail Innovation Lab</div>
        <img src={Pic} alt="siteImage" className="image" />
      </div>
    </div>
  )
}

export default TopNavBar
