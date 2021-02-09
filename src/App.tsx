import React, { FC } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import { Button, Switch } from 'antd';
import './App.css';
import { NumberSetterContainer, NumberViewerContainer } from './components';
import DocsManager from './components/DocsManager/DocsManager';
import {LoginComponent} from './components/Login/LoginComponent';
import PrivateRoute from './containers/PrivateRoute';
const App: FC = () => (
  <BrowserRouter>
  <div>
    <Switch>
      <Route path="/" exact = {true} component = {LoginComponent}/>
      <Route path="/login" component = {LoginComponent}/>
      <PrivateRoute path='/search' component={DocsManager} />

      {/* <NumberSetterContainer />
      <NumberViewerContainer/> */}
    </Switch>
  </div>

  </BrowserRouter>
  // <div className="App">
   
  // </div>
  
);

export default App;