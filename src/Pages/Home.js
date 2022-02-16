import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    render(){
        return (
        <div>
            <h1>Homepage</h1>
            <Link to="/favorites"> Favorites |</Link>
            <Link to="/weekly"> Weekly |</Link>
            <Link to="/weekly-battle"> Weekly Battle |</Link>
            <Link to="/popular"> Popular |</Link>
            <Link to="/popular-battle"> Popular Battle</Link>
        </div>    
        
        )
    };
}

export default Home;