import React, { Component } from 'react';

import classes from './App.css';
import Login from './Containers/Login';
import MainPage from './Containers/MainPage';
import {Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Route path="/" component={Login}/>
        <Route path="/mainpage" component={MainPage}/>
         
      </div>
     
    );
  }
}

export default App;
