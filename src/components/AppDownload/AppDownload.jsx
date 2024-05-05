import React from 'react'
import { assets } from '../../assets/assets'
import'./AppDownload.css'
export default function AppDownload() {
  return (
    <div className='app-download'>
    <p>For Better Experience Download<br></br> Tomoto</p>
    <div className='app-download-platform'>
    <img src={assets.play_store } alt=""></img>
    <img src={assets.app_store} alt=''></img>
     </div>
    </div>
  )
}
