import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import img1 from './images/DashboardList/eight.jpg'
import img2 from './images/DashboardList/eleven.jpg'
import img3 from './images/DashboardList/five.jpg'
import CardDisplay from './components/DetailedDisplay/CardDisplay'
export default function App() {
  const imgList = [
    { id: 1, imgName: 'eightJpg', imgSrc: img1 },
    { id: 2, imgName: 'elevenJpg', imgSrc: img2 },
    { id: 3, imgName: 'fiveJpg', imgSrc: img3 },
  ]
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage imageList={imgList} />} />
        <Route path="/displayCardContent/:id" element={<CardDisplay/>}/>
      </Routes>
    </div>
  )
}
