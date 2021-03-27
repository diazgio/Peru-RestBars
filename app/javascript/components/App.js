import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Restaurants from './Restaurants/Restaurants';
import Restaurant from './Restaurant/Restaurant';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Forgot from './Auth/Password/Forgot';
import Reset from './Auth/Password/Reset';
import Navbar from './Navbar';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import UnprotectedRoute from './UnprotectedRoute';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Restaurants}/>
        <Route exact path="/restaurants/:slug" component={Restaurant}/>
        <UnprotectedRoute path="/login" component={Login}/>
        <UnprotectedRoute exact path="/register" component={Register} />
        <UnprotectedRoute path="/forgot-password" component={Forgot}/>
        <UnprotectedRoute path="/reset-password" component={Reset}/>
      </Switch>
    </AuthProvider>
  )
};

export default App;