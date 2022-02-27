import React from 'react'
import {Link} from 'react-router-dom';

export default function CarouselImageCreator({ card }) {
  // {id: 8,imgName: 'eightJpg',imgSrc: img8}

  return (
    <div className="item">
      <div className="card" style={{ width: '18rem' }}>
        <Link to="/displayCardContent/${card.id}" state={{productDetails:card}}>
        <img src={card.imgSrc} className="card-img-top" alt="card" />
        </Link>
        <div className="card-body">
          <Link to='/displayCardContent/${card.id}' state={{productDetails:card}}>
          <h5 className="card-title">{card.imgName}</h5>
          </Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content with Image Name:{card.imgName}
          </p>
          <button className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
