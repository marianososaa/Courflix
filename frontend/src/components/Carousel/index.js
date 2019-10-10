import React from 'react';
import "./style.scss";
import Slider from "react-slick";

class Carousel extends React.Component{
    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return(
            <React.Fragment>
                <div className = "carousel-container">
                    {this.props.products.map((item, i) => {
                        return (
                        <React.Fragment>
                            <div className = "name-container">
                                <span key = {i}>{item.carouselName}</span>
                                <Slider {...settings}>
                                {item.items.map((uniqueItem, i) => {
                                    return (
                                        <div className = "image-container" key = {i}>
                                            <img src={uniqueItem.img} />
                                        </div>
                                    )
                                })}
                                </Slider>
                            </div>
                        </React.Fragment>
                            )
                        })}
                </div>
            </React.Fragment>
        );
    }
}

export default Carousel;