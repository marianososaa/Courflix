import React from 'react';
import "./style.scss";
import logo from "../../../src/logo.png";

class Header extends React.Component{
    render(){
        return(
            <div className = "header-container">
                <img src ={logo}></img>
                <ul>
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Peliculas</li>
                    <li>Agregados recientemente</li>
                    <li>Mi lista</li>
                </ul>
            </div>
        );
    }
}
export default Header;