import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Sum from './forms/Sum.js';
import Clock from './forms/Test';
//import Login from './forms/login';
import Emp from './forms/emp';
import EmpRedux from './forms/empredux';
import DisplayEmp from './forms/DisplayEmp';
import EmpForm from './forms/EmpForm';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {



  render() {

    const MyEmpProp = (props) => {
      return (
        <Emp  pin='293'/>
      );
    }

    return (
      <Router>
        <div>
            <h3>  <Link to="/">Home</Link> |  <Link to="/sum">Sum</Link> | <Link to="/emp">Employee</Link>  |  <Link to="/empredux">Employee - Redux</Link> | <Link to="/empForm">Employee - Redux & bootstrap</Link> | <Link to="/DisplayEmp">Display Employee List</Link> </h3>
            <Route exact path="/" component={Clock}/>
            <Route  path="/sum" component={Sum}/>
            <Route  path="/empForm" component={EmpForm}/>
            <Route  path="/emp" component={MyEmpProp}/>
            <Route  path="/empredux" component={EmpRedux}/>
            <Route  path="/DisplayEmp" component={DisplayEmp}/>
        </div>
      </Router>
    );
  }
}

export default App;
