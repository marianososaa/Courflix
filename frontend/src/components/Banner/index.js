import React from 'react';
import "./style.scss"

class Banner extends React.Component{
    render(){
        return(
            <div className="banner-container">
                <div className="text-container">
                    <div className="title">{this.props.title}</div>
                    <div className="subtitle">{this.props.subtitle}</div>
                </div>
                <div className="buttons">
                    <input className = "Play" type="button" value="Reproducir"/>
                    <input className ="List" type="button" value="Mi lista"/>
                </div>
                <div className="description">
                    <div className="tdescription">{this.props.tdescription}</div>
                    <div className="idescription">{this.props.idescription}</div>
                </div>
            </div>
        )
    }
}

export default Banner;