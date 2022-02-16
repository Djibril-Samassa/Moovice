import React from "react";
import Card from "../Components/Card"

class Popular extends React.Component{

    constructor(){
        super();
        this.state = {
            movies:[]
        };
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=94d06e89e3d1384687305d0385d6fcaa")
        .then((res) => res.json())
        .then((res) =>{
            res.results.map((film) =>{
                this.state.movies.push(film)
            })
        })
    };


    render(){
        return (
            <div>
                <h1>Popular</h1>
            </div>
        
        )
    };

}

export default Popular;