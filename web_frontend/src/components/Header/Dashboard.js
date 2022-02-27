import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import CarouselImageCreator from './DashboardComp/CarouselImageCreator'
const Dashboard = ({ imageListAll }) => {
  const options = {
    items: 2,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 1000,
  }

  const allImages = imageListAll.map((img)=><CarouselImageCreator key={img.id} img={img}/>)
  // {id: 1, imgName: 'eightJpg', imgSrc: 'eight.jpg'}

  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
      {allImages}
      </OwlCarousel>
    </div>
  )
}

export default Dashboard
