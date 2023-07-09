/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import {Artists_gallery,Our_Products} from './assets/images'
import ImageCard from './Components/ImageCard'
import OverflowCard from './Components/OverflowCard'

const App = () => {
  return (
      <>
          <header className="header">
              <div className="header_container">
                  <div>
                      <h1>CoolFit</h1>
                  </div>
                  <div className="header_links">
                      <a href="#">Lorem</a>
                      <a href="#">ipsum</a>
                      <a href="#">cortae</a>
                      <a href="#">lemna</a>
                      <a href="#">sum</a>
                  </div>
                  <div className="header_login">
                      <a href="#">Login</a>
                  </div>
              </div>
          </header>
          <main className="main_content">
              <section className="hero_section">
                  <div className="hero_section_container">
                      <div className="hero_section_text">
                          <h1>
                              Find The Best <br></br> Fashion Style <br></br>For
                              You
                          </h1>
                          <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Quia sit, suscipit autem cumque
                              reiciendis nemo temporibus? Aspernatur laudantium
                              unde dignissimos, modi eius tempora vero maiores
                              repellendus beatae officiis.
                          </p>
                          <a href="#" className="hero_section_link">
                              Shop Now
                          </a>
                      </div>
                      <div className="hero_section_image">
                          <img src="./src/assets/hero.jpg" />
                      </div>
                  </div>
              </section>
              <div className="main_content_container">
                  <section className="new_collections main_container">
                      <div className="new_collections_text">
                          <h2>New Collections</h2>
                          <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Cumque facere blanditiis
                              pariatur quos quod, hic natus.
                          </p>
                      </div>
                      <div className="new_collections_images">
                          <img src="./src/assets/hero.jpg" />
                          <img src="./src/assets/hero.jpg" />
                          <img src="./src/assets/hero.jpg" />
                      </div>
                  </section>
                  <section className="best_fashion main_container">
                      <div className="best_fashion_container">
                          <div className="best_fashion_image">
                              <img src="./src/assets/hero.jpg" />
                              <div className="best_fashion_overlay_box">
                                  <div>
                                      <h3>2014</h3>
                                      <p>Done</p>
                                  </div>
                                  <span></span>
                                  <div>
                                      <h3>8900+</h3>
                                      <p>Done</p>
                                  </div>
                                  <span></span>
                                  <div>
                                      <h3>3015+</h3>
                                      <p>Done</p>
                                  </div>
                              </div>
                          </div>
                          <div className="best_fashion_text">
                              <h2>
                                  Best Fashion <br></br>Since 2014
                              </h2>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Laudantium, tempora! Neque,
                                  eveniet amet. Veritatis molestias quasi
                                  repudiandae provident earum officia quidem?
                                  Non dolores sed autem obcaecati laborum sint
                                  praesentium ut!.Veritatis molestias quasi
                                  repudiandae provident earum officia quidem?
                                  Non dolores sed autem obcaecati laborum sint
                                  praesentium ut!
                              </p>
                          </div>
                      </div>
                  </section>
                  <section className="best_seller_product ">
                      <div className="best_seller_product_container">
                          <div className="best_seller_product_text">
                              <h1>
                                  Best Seller <br></br>Product
                              </h1>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit.totam adipisci odio voluptate
                                  provident necessitatibus voluptatum suscipit?
                                  Odit enim, unde molestiae voluptatem rerum,
                                  fugit neque velit consectetur ratione minus
                                  ducimus natus, totam adipisci odio voluptate
                                  provident necessitatibus voluptatum suscipit?
                              </p>
                              <a href="#" className="best_seller_product_link">
                                  See More
                              </a>
                          </div>
                          <OverflowCard />
                      </div>
                  </section>
                  <section className="our_product main_container">
                      <div className="our_product_container">
                          <div className="our_product_text">
                              <h2>Our Product</h2>
                              <div className="our_product_links">
                                  <a href="#">Home</a>
                                  <a href="#">For Ladies</a>
                                  <a href="#">Continental wear</a>
                                  <a href="#">Trending</a>
                              </div>
                          </div>
                          <div className="our_product_images">
                              {Our_Products.map((image) => {
                                  return (
                                      <ImageCard
                                          Image={image}
                                          key={image}
                                          status={"Sold"}
                                          price={"4.99"}
                                      />
                                  );
                              })}
                          </div>
                      </div>
                  </section>
                  <section className="deal_of_the_day main_container">
                      <div className="deal_of_the_day_container">
                          <div className="deal_of_the_day_text">
                              <div className="deal_of_the_day_description">
                                  <h1>Deal Of The Day</h1>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Ea reprehenderit minus
                                      sint voluptatibus unde, enim non odio
                                      veritatis veniam, deleniti nisi iure
                                      obcaecati.
                                  </p>
                              </div>
                              <div className="deal_of_the_day_time">
                                  <div>
                                      <p>03</p>
                                      <span>Hour</span>
                                  </div>
                                  <div>
                                      <p>08</p>
                                      <span>Minute</span>
                                  </div>
                                  <div>
                                      <p>09</p>
                                      <span>Second</span>
                                  </div>
                              </div>
                              <a href="#" className="deal_of_the_day_text_link">
                                  Shop Now
                              </a>
                          </div>
                          <div className="deal_of_the_day_image">
                              <img src="./src/assets/hero.jpg" />
                          </div>
                      </div>
                  </section>
                  <section className="testimony main_container">
                      <div className="testimony_container"></div>
                  </section>
              </div>
          </main>
          <footer className="footer">
              <div className="artist_gallery small_screen">
                  {Artists_gallery.map((image) => {
                      return (
                          <div className="artist_gallery_image ">
                              <img src={image} />
                          </div>
                      );
                  })}
                  <div className="artist_gallery_board">
                      <span>Meet our distinguished and cherished designers</span>
                  </div>
              </div>

              <div className="footer_container">
                  <div className='footer_links'>
                      <a href="#">Damn</a>
                      <a href="#">Damn</a>
                      <a href="#">Damn</a>
                      <a href="#">Damn</a>
                      <a href="#">Damn</a>
                  </div>
                  <div className='footer_copyright'>
                      <p>Copyright 2023</p>
                      <p>All rights Reserved</p>
                  </div>
              </div>
          </footer>
      </>
  );
}

export default App