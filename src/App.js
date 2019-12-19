import React, {Component} from "react";
import "./App.css";
import Contact from "./component/contact"
import {Route,Switch,Redirect} from 'react-router-dom';
import Navbar from "./component/navbar";
import All from "./component/all";


class App extends Component {
  render(){
    return (
      
        
        <div class="App">
          <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/all" component={All} />
          <Redirect from="/" to="/all"/>
            </Switch>
       </div>
      

        
  );
  }
}

export default App;
