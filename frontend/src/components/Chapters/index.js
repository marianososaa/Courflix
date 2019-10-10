import React from 'react';
import "./style.scss";
import Slider from "react-slick";

class Chapters extends React.Component{
    render(){
        const settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return(
            <React.Fragment>
                <div className = "chapter-container">
                    <Slider {...settings}>
                    <div className = "episode">
                        <img src ="https://malditosnerds.com/__export/1556684191846/sites/claro/malditosnerds/img/2019/05/01/jaime-king-mustafa-alabssi-justin-chu-cary-and-kelsey-flower-in-black-summer_crop1556684191631.jpeg_812050776.jpeg" />
                        <h5>Episodio 1</h5>
                        <p>Descripcion</p>
                    </div>
                    <div className = "episode">
                        <img src="https://elcomercio.pe/resizer/o2OnfAjh5bW5jMpHDFh2jKytnvc=/980x0/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PQE7CMWSTNHR7AGR5UK3MSY5UM.jpg"/>
                        <h5>Episodio 2</h5>
                        <p>Descripcion</p>
                    </div>
                    <div className = "episode">
                        <img src = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/04/black-summer_1.jpg?itok=DWJNdO34"/>
                        <h5>Episodio 3</h5>
                        <p>Descripcion</p>
                    </div>
                    <div className = "episode">
                        <img src ="https://www.ecestaticos.com/imagestatic/clipping/051/8df/0518dfb4be0baa7b95ee2422ea8ec0b6/imagen-sin-titulo.jpg?mtime=1555415695"/>
                        <h5>Episodio 4</h5>
                        <p>Descripcion</p>
                    </div>
                    <div className = "episode">
                        <img src ="https://static.elcorreo.com/www/multimedia/201904/17/media/cortadas/black-summer-kQf-U7011986026905sF-624x385@RC.jpg"/>
                        <h5>Episodio 5</h5>
                        <p>Descripcion</p>
                    </div>
                    <div className = "episode">
                        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ceklAHOcJOCADIoetiat1yAO33qWA1JHE0-cbmmXYXBnrblv&s"/>
                        <h5>Episodio 6</h5>
                        <p>Descripcion</p>
                    </div>
                    <div className = "episode">
                        <img src ="http://www1.pictures.zimbio.com/mp/mou9vjbcBOYl.jpg"/>
                        <h5>Episodio 7</h5>
                        <p>Descripcion</p>
                    </div>
                    </Slider>
                </div>
            </React.Fragment>
        )
    }
}
export default Chapters;