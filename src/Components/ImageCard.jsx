/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ImageCard.css'

const ImageCard = (props) => {
  return (
    <div className='image_card'>
        <div className='image_card_image'>
            <img src={props.Image} />
        </div>
        <div className='image_card_description'>
            <div>Stars</div>
            <p>Lorem Ipsum Darum</p>
            <div className='image_card_price_tag'>
                <p className={props.status ==="Sold" ?"image_card_price_status_sold": ''}>{props.status}</p>
                <p>${props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ImageCard