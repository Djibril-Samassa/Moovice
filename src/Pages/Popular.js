import React from "react";
import {Link} from "react-router-dom"
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
            this.setState({movies: (res).results})
            console.log(this.state.movies);
        })
    };



    render(){
        return (
            <div>
                <h1>Popular</h1>
                <Link to="/">Homepage</Link>
                <ul>
                    {this.state.movies.map((movie) =>{
                    return <Card
                    path={movie.poster_path}
                    title={movie.original_title}
                    year={movie.release_date}
                    desc={movie.overview}
                    />
                    })}
                </ul>
            </div>
        
        )
    };

}

export default Popular;