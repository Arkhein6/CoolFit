/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./OverflowCard.css";
import { Seller_Products } from "../assets/images";

const OverflowCard = (props) => {
    return (
        <div className="carousel">
            <div className="inner_carousel">
                {Seller_Products.map((image) => {
                    return (
                        <div className="card">
                            <div className="card_image">
                                <img src={image} />
                            </div>
                            <div className="card_description">
                                <div>Stars</div>
                                <p>Lorem Ipsum Darum</p>
                                <div className="card_price_tag">
                                    <p>sold</p>
                                    <p>$4.99</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="indicators">
                <div className="indicator_item"></div>
                <div className="indicator_item"></div>
                <div className="indicator_item"></div>
            </div>
        </div>
    );
};

export default OverflowCard;
