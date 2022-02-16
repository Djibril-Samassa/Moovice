import React from "react";
import Poster from "./poster.png";
import "../App.css";

class Card extends React.Component{
    render(){
        return(
            <div>
                <img src={Poster} className="photo" alt="poster" />
                <h2>Title: {this.props.title}</h2>
                <p>Année de sortie: {this.props.year}</p>
                <p>Description: {this.props.desc}</p>
            </div>
        )
    }
}

export default Card;