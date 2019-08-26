import React from 'react';
import LandingPage from './components/LandingPage';
import AvengersList from './components/AvengersList';
import AvengerItem  from './components/AvengerItem';


import {PushSpinner, SwishSpinner, GuardSpinner} from 'react-spinners-kit';
import {Route} from 'react-router-dom';

import {Button, Container, Icon, Menu} from 'semantic-ui-react';

import './App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import avengerInfo from './data/avengerInfo';

// <NavLink to = '/' >  Home </NavLink>

function App() {
  return (
    <div className="App">
        <Menu>
          <Menu.Item>
            <PushSpinner  size={30} color="rebeccapurple"/>
            <NavLink to  = '/'> Landing Page </NavLink>
          </Menu.Item>        
          <Menu.Item>
            <GuardSpinner size = {30} frontColor= "deeppink" backColor = 'dodgerblue'/>
            <NavLink to  = '/avengers'> Avengers List Page </NavLink>
          </Menu.Item>
        </Menu>

        
        <Route
          exact path = '/avengers/:id'
          render = { (props) => <AvengerItem {...props} heroProp = {' Only one Avenger'}/>}
        />


        <Route
        exact path = '/avengers'
        render = { (props) => <AvengersList {...props}  listProp = {' the Avengers '}/> }
        /> 
        <Route
        exact path = '/' 
        render = { (props) => <LandingPage {...props} landingProp = {` the Landing Page`} />}
        />

    </div>
  );
}

export default App;
/*
          <Menu.Item>
            <Route
              exact path = '/' 
              render = { (props) => <LandingPage {...props} landingProp = {` the Landing Page`} />}
            />
          </Menu.Item>

*/