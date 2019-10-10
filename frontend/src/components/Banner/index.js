import React from 'react';
import "./style.scss"
import Chapters from "../Chapters"

class Banner extends React.Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
          showEpisodes: false,
        }
      }

      showEpisodes(){
        if (this.state.showEpisodes == true) {
            this.setState({
                showEpisodes: false,
            });
          } else {
            this.setState({
                showEpisodes: true,
            });
          }
      }

    render(){
        return(
            <React.Fragment>
                <div className="banner-container">
                    <div className="text-container">
                        <p className="title">{this.props.title}</p>
                        <p className="subtitle">{this.props.subtitle}</p>
                        <p className="msubtitle">{this.props.msubtitle}</p>
                    </div>
                    <div className="buttons">
                        <input onClick ={() => this.showEpisodes()} className = "play" type="button" value="Reproducir"/>
                        {this.state.showEpisodes? (
                                        <Chapters/>
                                    )
                                    : (
                                    null
                                    ) }
                        <input className ="list" type="button" value="Mi lista"/>
                        <input className ="chapter" type="button" value="Episodios"/>
                        </div>
                    <div className="description">
                        <div className="tdescription">{this.props.tdescription}</div>
                        <div className="idescription">{this.props.idescription}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Banner;