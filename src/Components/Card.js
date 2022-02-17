import React from "react";
import Poster from "./poster.png";
import "../App.css";
import "../style/Card.css"

class Card extends React.Component{

    render(){
        return(
            <div>
                <img src={Poster} className="photo" alt="poster" />
                <h2 className="title">Titre: {this.props.title}</h2>
                <p className="year">Date de sortie: {this.props.year}</p>
                <p className="desc">Description: {this.props.desc}</p>
            </div>
        )
    }
}

export default Card;