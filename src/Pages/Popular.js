import React from "react";

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
        
    };



    render(){
        return (
        <h1>Popular</h1>
        )
    };

}

export default Popular;