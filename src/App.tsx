import React, { FC } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loader from 'react-loaders';
import './App.css';
import PrivateRoute from './containers/PrivateRoute';
import { DocsManagerContainer } from './components/DocsManager/DocsManagerContainer';
import { LoginContainer } from './components/Login/LoginContainer';
const App: FC = () => (
  
  <BrowserRouter>
       
       
  <div>
  <Loader type="line-scale" active />
    <Switch>
      <Route path="/" exact = {true} component = {LoginContainer}/>
      <Route path="/login" component = {LoginContainer}/>
      <PrivateRoute path='/search' component={DocsManagerContainer} />
    </Switch>
  </div>

  </BrowserRouter>
  // <div className="App">
   
  // </div>
  
);

export default App;