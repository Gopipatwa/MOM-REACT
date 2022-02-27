import React from 'react';
import { useLocation } from 'react-router-dom'

export default function CardDisplay(props){
    console.log(props.location);
    const location = useLocation()
    const { productDetails } = location.state
    console.log(productDetails);
    return(
        <div>
            <div className="container">
            <div className="row">
                <div className='col-6'>
                    <div className="productImg">
                        <img src={productDetails.imgSrc} alt={productDetails.imgName} style={{height:'30rem',width:'30rem'}}/>
                    </div>
                    <div className="row">
                        <div className="col-6"><button className='btn btn-primary btn-lg my-3 px-5'>ADD TO CART</button></div>
                        <div className="col-6"><button className="btn btn-warning btn-lg my-3 px-5">BUY NOW</button></div>
                        
                    </div>
                </div>
                <div className='col-6'>
                    <div className="productDetails">
                        <div className="row">
                            <div className="productTitle">
                                <span>{productDetails.imgName}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}