import { Space, Spin } from 'antd';
import React, { FC } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loader from 'react-loaders';
// import { Button, Switch } from 'antd';
import './App.css';
import { NumberSetterContainer, NumberViewerContainer } from './components';
import {LoginComponent} from './components/Login/LoginComponent';
import PrivateRoute from './containers/PrivateRoute';
import { DocsManagerContainer } from './components/DocsManager/Container';
// const loader =
const App: FC = () => (
  
  <BrowserRouter>
       
       
  <div>
  <Loader type="line-scale" active />
    <Switch>
      <Route path="/" exact = {true} component = {LoginComponent}/>
      <Route path="/login" component = {LoginComponent}/>
      <PrivateRoute path='/search' component={DocsManagerContainer} />


      {/* <NumberSetterContainer />
      <NumberViewerContainer/> */}
    </Switch>
  </div>

  </BrowserRouter>
  // <div className="App">
   
  // </div>
  
);

export default App;