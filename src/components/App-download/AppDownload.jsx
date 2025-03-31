import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='Appdownload' id='Appdownload'>
      
      <p id='title'>For Better Experience Download<br/>Swippy</p>
      <div id="image"className='AppDownload-platforms' >
        <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
        </div>
        
    </div>
  )
}

export default AppDownload
