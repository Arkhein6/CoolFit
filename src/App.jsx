/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import {Artists_gallery,Our_Products,New_collections,Section_boards} from './assets/images'
import OverflowCard from './Components/OverflowCard'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ImageCard from './Components/ImageCard'


const App = () => {
    const [time,setTime] = React.useState({
        hours:23,
        minutes:59,
        seconds:59
    })
    
    React.useEffect(() => {
        if (time.seconds === 0) {
            setTimeout(() => {
                setTime((current) => {
                    return {
                        seconds: 59,
                        hours:
                            current.minutes === 0
                                ? current.hours === 0
                                    ? 23
                                    : (current.hours -= 1)
                                : current.hours,
                        minutes:
                            current.minutes === 0 ? 59 : (current.minutes -= 1),
                    };
                });
        
            }, 1000);
            
        }
        else {
        setTimeout(() => {
            setTime((current) => {
                return {
                    ...current,
                    seconds: (current.seconds -= 1),
                };
            });
        }, 1000);
    }

    },[time.seconds])
    
  return (
      <>
      <Header />
          <main className="main_content ">
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
                          <img src={Section_boards[0].image} />
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
                          {New_collections.map((item) => {
                              return <img src={item.image} />;
                          })}
                      </div>
                  </section>
                  <section className="best_fashion main_container">
                      <div className="best_fashion_container">
                          <div className="best_fashion_image">
                              <img src={Section_boards[1].image} />
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
                              {Our_Products.map((item) => {
                                  return (
                                      <ImageCard
                                          Image={item.image}
                                          key={item.id}
                                          status={item.status}
                                          price={item.price}
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
                                      <p>{time.hours}</p>
                                      <span>Hour</span>
                                  </div>
                                  <div>
                                      <p>{time.minutes}</p>
                                      <span>Minute</span>
                                  </div>
                                  <div>
                                      <p>{time.seconds}</p>
                                      <span>Second</span>
                                  </div>
                              </div>
                              <a href="#" className="deal_of_the_day_text_link">
                                  Shop Now
                              </a>
                          </div>
                          <div className="deal_of_the_day_image">
                              <img src={Section_boards[2].image} />
                          </div>
                      </div>
                  </section>
                  <section className="testimony main_container">
                      <div className="testimony_container">
                        <div className='testimony_text'>
                            <h2>Testomines</h2>
                            <p>Here is what our customers said about us!</p>
                        </div>
                        <div className='testimony_testimones'>

                        </div>
                      </div>
                  </section>
              </div>
          </main>
        <Footer />
        </>

  );
}

export default App