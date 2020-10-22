import React from "react";
import '../styles/Card.scss'



class Card extends React.Component {
    render() {
      return (
        <div className="grid-item">
            <div className="container_picture">
                <img className="picture" src={this.props.data.pic} alt={this.props.data.name}/>
            </div>
            <div className="container_description">
                <p className="name">{this.props.data.name}</p>
                <p className="surface">Superficie: {this.props.data.surface}</p>
                <p className="district"> Distrito: {this.props.data.district}</p>
                <p className="trees">Nº árboles: {this.props.data.trees}</p>
                <p className="bush">Nº arbustos: {this.props.data.bush}</p>
                <p className="bushy">Macizos arbustivos: {this.props.data.bushy}</p>
            </div>
        </div> 
        )
    }
}
export default Card;