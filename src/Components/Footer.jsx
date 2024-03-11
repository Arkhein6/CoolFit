import React from 'react'
import { Artists_gallery } from '../assets/images';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="artist_gallery ">
                <div className='artist_gallery_1'>
                    <div className="artist_gallery_image ">
                        <img src={Artists_gallery[0].image} />
                    </div>
                    <div className="artist_gallery_image ">
                        <img src={Artists_gallery[1].image} />
                    </div>
                    <div className="artist_gallery_image ">
                        <img src={Artists_gallery[2].image} />
                    </div>

                </div>
                <div className='artist_gallery_2'>
                    <div className="artist_gallery_image ">
                        <img src={Artists_gallery[3].image} />
                    </div><div className="artist_gallery_image ">
                        <img src={Artists_gallery[4].image} />
                    </div>
                </div>

                <div className="artist_gallery_board">
                    <span>
                        Meet our distinguished and cherished designers
                    </span>
                </div>
            </div>

            <div className="footer_container">
                <div className="footer_links">
                    <a href="#">Damn</a>
                    <a href="#">Damn</a>
                    <a href="#">Damn</a>
                    <a href="#">Damn</a>
                    <a href="#">Damn</a>
                </div>
                <div className="footer_copyright">
                    <p>Copyright 2023</p>
                    <p>All rights Reserved</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer