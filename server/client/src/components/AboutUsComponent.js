import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/AboutUs.css';

import aboutus from '../assets/aboutus.png'

export class AboutUsComponent extends Component {
    state ={
        images:['https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz','https://images.unsplash.com/photo-1537111261224-6fa49cecda2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80','https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80','https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80']
    }

    render() {
      const images=this.state.images;
        return (
          <div className="container-md">

            <div className="about-section">
              <div className="about-header">
                <h2>About us</h2>
                <p>Our mission is to create a fun and supportive environment where we develop programming and statistic skills together.We want to replace statistics anxiety and code fear with inspiration and motivation to learn, and here we will share our experience.To represent our department in various inter-college fests.</p>
              </div>
                <img alt="abt" className="abt-img" src={aboutus}/>
            </div>

            <h2 className="carousel-heading">Gallery</h2>
            <div className="container-fluid">
              <Carousel className="carousel">
              {images.map((image,ind)=>{
                return(
                  <Carousel.Item>
                  <img className="c-img carousel-img" src={image}/>
                </Carousel.Item>
                )
              })}
              </Carousel>
            </div>
          </div>
        )
    }
}

export default AboutUsComponent
