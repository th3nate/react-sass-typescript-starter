import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './app.component.scss';
import Home from '../home/home.component';
import About from '../about/about.component';
import Header from '../common/header/header.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About as any}/>
      </Switch>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
