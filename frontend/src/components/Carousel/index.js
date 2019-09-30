import React from 'react';

class Carousel extends React.Component{
    render(){
        return(
            <React.Fragment>
                {this.props.products.map((item, i) => {
                    return (
                    <React.Fragment>
                        <div className = "carousel-container">
                            <span key = {i}>{item.carouselName}</span>
                            <div className = "image-container" key = {i}><img src ={item.items}/></div>
                            {/* {this.props.products.map((item, i) => {
                                return (<div className = "image-container">
                                    <img src ={item.items}></img>
                                    </div>)      
                            })} */}
                        </div>
                    </React.Fragment>
                        )
                    })}
            </React.Fragment>
        );
    }
}

export default Carousel;