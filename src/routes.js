import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
  <Switch>
    <Route exact component={Home} path='/' />
    <Route component={About} path='/about' />
    <Route component={ClassList} path='classlist/:class' />
    <Route component={Student} path='/student/:id' />
  </Switch>
);