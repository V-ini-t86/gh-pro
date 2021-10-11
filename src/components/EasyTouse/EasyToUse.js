import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import "./EasyToUse.css";
const testimonials = [
  {
    id: 1,
    img: "views/01.jpg",
  },
  {
    id: 2,
    img: "views/02.jpg",
  },
  {
    id: 3,
    img: "views/03.jpg",
  },
  {
    id: 4,
    img: "views/04.jpg",
  },
  {
    id: 5,
    img: "views/05.jpg",
  },
];
const CAROUSEL = {
  background: "#FFFDD0",
  marginTop: "-9%",
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "8%",
  paddingBottom: "12.5%",
  paddingLeft: "5%",
  paddingRight: "5%",
  border: "1px solid #ddd",
  height: "269px",
};
function EasyToUse() {
  return (
    <div id="testimonials">
      <div className="section-title text-center">
        <h2>Easy To Use</h2>
      </div>
      <Container fluid="md">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <ul className="list fw-bolder fs-4">
              <li>Sign In</li>
              <li>Go To "Start Your Project"</li>
              <li>Upload Document files </li>
              <li>Fill The Enquiry Form</li>
              <li>Choose A Plan</li>
              <li>Wait For Results</li>
            </ul>
          </div>
          <div className="col-lg-6 ">
            {/* <ParticlesBg type="lines" bg={true} /> */}
            <div>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={4000}
              >
                {testimonials
                  ? testimonials.map((d, i) => (
                      <div key={`${d.name}-${i}`}>
                        <img
                          className="myCarousel-img"
                          style={{
                            position: "relative",
                            bottom: "10px",
                            width: "100px",
                            height: "250px",
                            marginTop: "50px",
                          }}
                          src={d.img}
                          alt=""
                        />
                      </div>
                    ))
                  : "loading"}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default EasyToUse;
