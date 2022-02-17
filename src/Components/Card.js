import React from "react";
import "../App.css";
import "../style/Card.css"

class Card extends React.Component{

    render(){
        return(
            <div className="card" onClick={this.props.onClick}>
                <img className="image" src={`https://image.tmdb.org/t/p/w300/${this.props.path}`}/>
                <h3 className="title">{this.props.title}</h3>
                <p className="year">Date de sortie: {this.props.year}</p>
                <p className="desc">{this.props.desc}</p>
            </div>
        )
    }
}

export default Card;