import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import Fooddisplay from '../../Fooddisplay/Fooddisplay'
import AppDownload from '../../App-download/AppDownload'
const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
    <Header/>
  
    <ExploreMenu category={category} setCategory={setCategory}/>
    <Fooddisplay category={category}/>
    <AppDownload/>
    </div>
  )
}

export default Home
