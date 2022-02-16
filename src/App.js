import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Popular from "./Pages/Popular";
import PopularBattle from "./Pages/PopularBattle";
import Weekly from "./Pages/Weekly";
import WeeklyBattle from "./Pages/WeeklyBattle";
class App extends React.Component{

  render(){

    return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/weekly" component={Weekly}/>
      <Route exact path="/weekly-battle" component={WeeklyBattle}/>
      <Route exact path="/popular" component={Popular}/>
      <Route exact path="/popular-battle" component={PopularBattle}/>
      <Route exact path="/favorites" component={Favorites}/>
    </Switch>
    </BrowserRouter>

  };

}

export default App;