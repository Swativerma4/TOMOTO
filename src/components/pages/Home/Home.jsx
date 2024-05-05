import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../AppDownload/AppDownload';

export default function Home() {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header></Header>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    </div>
  )
}
