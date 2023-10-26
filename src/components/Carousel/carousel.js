import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.scss';
import Image2 from '../../assets/Portfolio XD/demo-image-01.jpg';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="carousel-presentation bg-primary">
        <div className="container">
            
            <div className="carousel-background">
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    arrows= {false}
                    vertical= {true}
                >
                    <div className="slide-items">
                        <img src={Image2} className="img-fluid" alt="..." />
                    </div>
                    <div className="slide-items">
                        <img src={Image2} className="img-fluid" alt="..." />
                    </div>
                    <div className="slide-items">
                        <img src={Image2} className="img-fluid" alt="..." />
                    </div>
                    <div className="slide-items">
                        <img src={Image2} className="img-fluid" alt="..." />
                    </div>
                    <div className="slide-items">
                        <img src={Image2} className="img-fluid" alt="..." />
                    </div>
                    <div className="slide-items">
                        <img src={Image2} className="img-fluid" alt="..." />
                    </div>
                </Slider>
            </div>

            <div className="carousel-chronological">
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
            
        </div>  
      </div>
    );
  }
}