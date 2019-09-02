import React from 'react';
import LandingPage from './components/LandingPage';
import AvengersList from './components/AvengersList';
import AvengerItem  from './components/AvengerItem';
import AvengerCarousel from './components/AvengerCarousel';

import {PushSpinner, GuardSpinner, PongSpinner} from 'react-spinners-kit';
import {Route} from 'react-router-dom';

import {Button, Container, Icon, Menu, Dropdown} from 'semantic-ui-react';

import './App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import avengerInfo from './data/avengerInfo';

// <NavLink to = '/' >  Home </NavLink>

function App() {
  return (
    <div className="App">
        <Menu active>
          <Menu.Item style = {{border: `1px solid purple`, margin: '10px'}} >
            <PushSpinner  size={30} color="rebeccapurple" />
            <NavLink to  = '/'   style  = {{margin: `10px`}}> Landing Page </NavLink>
          </Menu.Item>        
          <Menu.Item style = {{border: `1px solid purple`, margin: '10px'}} >
            <GuardSpinner size = {30} frontColor= "deeppink" backColor = 'dodgerblue'/>
            <NavLink to  = '/avengers' style  = {{margin: `10px`}}> Avengers List Page </NavLink>
          </Menu.Item>
          <Menu.Item style = {{border: `1px solid purple`, margin: '10px'}} >
            <PongSpinner size = {30} color = 'seagreen'/>
            <NavLink to  = '/avengersCarousel' style  = {{margin: `10px`}}> Avengers Carousel</NavLink>
          </Menu.Item>
          
          <Menu.Menu vertical position = 'right'>
                      <Dropdown item text='Menu Routes Dropdown'>
                      <Dropdown.Menu>
                      <Dropdown.Item style = {{border: `1px solid purple`, margin: '10px'}} >
                      <PushSpinner  size={30} color="rebeccapurple" />
                      <NavLink to  = '/'   style  = {{margin: `10px`}}> Landing Page </NavLink>
                      </Dropdown.Item>        
                      <Dropdown.Item style = {{border: `1px solid purple`, margin: '10px'}} >
                      <GuardSpinner size = {30} frontColor= "deeppink" backColor = 'dodgerblue'/>
                      <NavLink to  = '/avengers' style  = {{margin: `10px`}}> Avengers List Page </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item style = {{border: `1px solid purple`, margin: '10px'}} >
                      <PongSpinner size = {30} color = 'seagreen'/>
                      <NavLink to  = '/avengersCarousel' style  = {{margin: `10px`}}> Avengers Carousel</NavLink>
                      </Dropdown.Item>
                      </Dropdown.Menu>
                        </Dropdown>  
          </Menu.Menu>




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

        <Route
          exact path = '/avengersCarousel' 
          render = { (props) => <AvengerCarousel {...props} landingProp = {` the Carousel Page`} />}
        />

    </div>
  );
}

export default App;
