/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./OverflowCard.css";
import { Seller_Products } from "../assets/images";
import { motion } from "framer-motion";

const OverflowCard = () => {
    const [width,setWidth] = React.useState(0)
    const Carousel = React.useRef()

    React.useEffect(() => {
      setWidth(Carousel.current.scrollWidth - Carousel.current.offsetWidth)
    }, [])
    
    return (
        <motion.div ref={Carousel} className="carousel">
            <motion.div drag='x' dragConstraints={{
                right:0,
                left:-width
            }} className="inner_carousel">
                {Seller_Products.map((item) => {
                    return (
                        <motion.div className="card">
                            <div className="card_image">
                                <img src={item.image} />
                            </div>
                            <div className="card_description">
                                <div>{item.rating}</div>
                                <p>{item.title}</p>
                                <div className="card_price_tag">
                                    <p>{item.status}</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div className="indicators">
                <div className="indicator_item ac"></div>
                <div className="indicator_item"></div>
                <div className="indicator_item"></div>
            </div>
        </motion.div>
    );
};

export default OverflowCard;
