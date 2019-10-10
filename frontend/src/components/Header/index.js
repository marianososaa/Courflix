import React from 'react';
import "./style.scss";
import logo from "../../../src/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUsers } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
        }
      }

      showMenu(){
        if (this.state.showMenu == true) {
            this.setState({
                showMenu: false,
            });
          } else {
            this.setState({
                showMenu: true,
            });
          }
      }

    render(){
        return(
            <React.Fragment>
                <div className = "headers-container">
                    <div className = "header-desktop">
                        <img src ={logo}></img>
                        <ul>
                            <li>Inicio</li>
                            <li>Series</li>
                            <li>Peliculas</li>
                            <li>Agregados recientemente</li>
                            <li>Mi lista</li>
                        </ul>
                    </div>

                    <div class="header-mobile">
                        <div class="mobile">
                            <button onClick ={() => this.showMenu()}><FontAwesomeIcon icon={faBars} /></button>
                            <img src ={logo}></img>
                        </div>
                        <div className = "menu">
                            {this.state.showMenu? (
                                <div id = "list">
                                    <div id ="settings">
                                            <FontAwesomeIcon icon={faUsers} />
                                            <div><p>CourseIT</p><p>Cambiar perfiles</p></div>
                                    </div>
                                    <ul>
                                        <li>Cuenta</li>
                                        <li>Centro de Ayuda</li>
                                        <li>Cerrar sesion en Netflix</li>
                                        <br></br>
                                        <li>Inicio</li> 
                                        <li>Mi lista</li>
                                        <li>Tv de accion y aventuras</li>
                                        <li>Accion y aventuras</li>
                                        <li>Peliculas Africanas</li>
                                        <li>Peliculas Alemanas</li>
                                        <li>Ambientadas en otra epoca</li>
                                        <li>Anime de accion</li>
                                        <li>TV Argentina</li>
                                        <li>Peliculas Australianas</li>
                                        <li>Series Australianas</li>
                                    </ul>
                                </div>
                                )
                                : (
                                null
                                ) }
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;