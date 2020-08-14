import React, { Component } from 'react';

import classes from './App.css';
import Login from './Containers/Login';
import MainPage from './Containers/MainPage';
import ListGrant from './Containers/ListGrant';
import ExpandCard from './Components/CardView/ExpandCard';
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className={classes.App} style={{minHeight: '100vh'}}>
        <Switch>
          <Route path="/mainpage" component={MainPage}/>
          <Route path="/listgrants" component={ListGrant}/>
          <Route path="/:id" component={ExpandCard}/>
          <Route path="/" component={Login}/>
        </Switch>
      </div>
     
    );
  }
}

export default App;
