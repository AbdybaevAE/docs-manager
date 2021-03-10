import React, {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loader from 'react-loaders';
import './App.css';
import PrivateRoute from './containers/PrivateRoute';
import {DocsManagerContainer} from './components/DocsManager/DocsManagerContainer';
import {LoginContainer} from './components/Login/LoginContainer';
import { CreateDocContainer } from './components/CreateDoc/CreateDocContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
const App : FC = () => (
  <div className="content">
    
    <BrowserRouter>
    <HeaderContainer/>
        <Switch>
            <Route path="/" exact={true} component={LoginContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <PrivateRoute path='/search' component={DocsManagerContainer}/>
            <PrivateRoute path='/add-doc' component={CreateDocContainer}/>
        </Switch>
    </BrowserRouter>
  </div>
);

export default App;