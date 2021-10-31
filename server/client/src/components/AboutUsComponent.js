import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/AboutUs.css';

export class AboutUsComponent extends Component {
    state ={
        images:['https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz','https://wallpapercave.com/wp/wp6350578.jpg','https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80']
    }

    render() {
      const images=this.state.images;
        return (
            <div className="container-fluid">
            <Carousel style={{height:"60vh",width:"900px",margin:"auto",marginTop:"50px"}}>
            {images.map((image,ind)=>{
              return(
                <Carousel.Item>
                <img style={{height:"60vh",width:"900px"}}
                  className="c-img w-100 40vh" src={image}/>
              </Carousel.Item>
              )
            })}
            </Carousel>
            </div>
//             <Carousel style={{height:"60vh",width:"900px",marginTop:"50px"}}>
//   <Carousel.Item>
//     <img style={{height:"60vh",width:"900px"}}
//       className="c-img w-100 40vh" src="https://wallpapercave.com/wp/wp6350578.jpg"/>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img style={{height:"60vh",width:"900px"}}
//       className="c-img w-100 40vh"
//       src="https://wallup.net/wp-content/uploads/2017/11/17/240723-programming-code-coding.jpg"
//       alt="Second slide"
//     />


//   </Carousel.Item>
//   <Carousel.Item>
//     <img style={{height:"60vh",width:"900px"}}c
//       className="c-img w-100 40vh"
//       src="https://wallup.net/wp-content/uploads/2017/11/17/240723-programming-code-coding.jpg"
//       alt="Third slide"
//     />

//   </Carousel.Item>
// </Carousel>
// </div>
        )
    }
}

export default AboutUsComponent
