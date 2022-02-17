import React from "react";
import Card from "../Components/Card"

class PopularBattle extends React.Component{

    constructor(){
        super();
        this.state = {
            movies:[],
            currentBattle:0,
            isLoading:true
        };
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=94d06e89e3d1384687305d0385d6fcaa")
        .then((res) => res.json())
        .then((res) =>{
            this.setState({movies: (res).results, isLoading:false})
        })
    };

    componentDidUpdate(){
        if(this.state.currentBattle >= 18){
            console.log(this.state.currentBattle);
            alert("Vous avez parcouru tous les Films")
        }
    }


    handleClick(){
        this.setState((prevState) =>{
            console.log(prevState);
            return{
                currentBattle: prevState.currentBattle +2,
            }
        })
    }

    render(){
        console.log();
        return (
        <div>
            <h1>Popular Battle</h1>
                {this.state.isLoading ? console.log("is Loading") : 
                <div>
                    <Card onClick={() => {this.handleClick()}}
                        path={this.state.movies[this.state.currentBattle].poster_path}
                        title={this.state.movies[this.state.currentBattle].original_title}
                        year={this.state.movies[this.state.currentBattle].release_date}
                    />
                    <Card onClick={() => {this.handleClick()}} 
                        path={this.state.movies[this.state.currentBattle +1].poster_path}
                        title={this.state.movies[this.state.currentBattle +1].original_title}
                        year={this.state.movies[this.state.currentBattle +1].release_date}
                    />
                </div>}
        </div>
        )
    };
}

export default PopularBattle;