import React from "react";
import Fade from 'react-reveal/Fade';
import '../styles/Card.scss'



class Card extends React.Component {
    render() {
      return (
        <div className="grid-item">
            <Fade big>
            <div className="container_picture">
                <img className="picture" src={this.props.data.pic} alt={this.props.data.name} title={this.props.data.name}/>
            </div>
            <div className="container_description">
                <p className="name">{this.props.data.name}</p>
                <p className="surface">Superficie: {this.props.data.surface}</p>
                <p className="district"> Distrito: {this.props.data.district}</p>
                <p className="trees">Nº árboles: {this.props.data.trees}</p>
                <p className="bush">Nº arbustos: {this.props.data.bush}</p>
                <p className="bushy">Macizos arbustivos: {this.props.data.bushy}</p>
                <a className="mapid" href={this.props.data.map} target={"_blank"}>Ver Mapa <i class="fas fa-map-marker-alt"></i></a>
            </div>
            </Fade>
        </div> 
        )
    }
}
export default Card;