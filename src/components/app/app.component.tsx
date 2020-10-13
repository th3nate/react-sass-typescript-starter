import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './app.component.scss';
import Home from '../home/home.component';
import About from '../about/about.component';
import Nav from '../common/nav/nav.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About as any}/>
      </Switch>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <Nav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
