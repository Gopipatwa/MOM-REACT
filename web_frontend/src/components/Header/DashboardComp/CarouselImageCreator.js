import React from 'react';
export default function CarouselImageCreator({img}){
    return(
        <div className='item'>
            <img src={img.imgSrc} alt={img.imgName} />
        </div>
    )
}