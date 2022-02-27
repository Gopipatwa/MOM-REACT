import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import ContentCardComponent from './ContentCard/ContentCardComponent'
import img1 from '../images/ContentCardList/one.jpg'
import img2 from '../images/ContentCardList/two.jpg'
import img3 from '../images/ContentCardList/three.jpg'
import img4 from '../images/ContentCardList/four.jpg'
import img5 from '../images/ContentCardList/five.jpg'
import img6 from '../images/ContentCardList/six.jpg'
import img7 from '../images/ContentCardList/seven.jpg'
import img8 from '../images/ContentCardList/eight.jpg'
export default function Content() {
  const options = {
    items: 4,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 1000,
  }
  const contentCardList = [
    {
      id: 1,
      imgName: 'oneJpg',
      imgSrc: img1,
    },
    {
      id: 2,
      imgName: 'twoJpg',
      imgSrc: img2,
    },
    {
      id: 3,
      imgName: 'threeJpg',
      imgSrc: img3,
    },
    {
      id: 4,
      imgName: 'fourJpg',
      imgSrc: img4,
    },
    {
      id: 5,
      imgName: 'fiveJpg',
      imgSrc: img5,
    },
    {
      id: 6,
      imgName: 'sixJpg',
      imgSrc: img6,
    },
    {
      id: 7,
      imgName: 'sevenJpg',
      imgSrc: img7,
    },
    {
      id: 8,
      imgName: 'eightJpg',
      imgSrc: img8,
    },
  ]
  const contentList = contentCardList.map((card)=><ContentCardComponent key={card.id} card={card} />)
  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
        {contentList}
      </OwlCarousel>
    </div>
  )
}
