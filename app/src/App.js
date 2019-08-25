import React from 'react';
import LandingPage from './components/LandingPage';



import {Route} from 'react-router-dom';
import {Button, Container, Icon, Menu} from 'semantic-ui-react';

import './App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div className="App">
        <Menu>
          <Menu.Item>
            <NavLink to = '/' >  Home </NavLink>
          </Menu.Item>
        </Menu>

        <Route
          exact path = '/'
          render = { (props) => <LandingPage {...props}  landingProp = {' the Landing Prop'}/> }
        />


    </div>
  );
}

export default App;
