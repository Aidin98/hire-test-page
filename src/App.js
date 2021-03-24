import React from 'react'
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import './App.css';
import Banner from './Banner';
import CheckBox from './CheckBox';
import DoorOffer from './DoorOffer';
import Fotter from './Fotter';
import Header from './Header';
import HeroSection from './HeroSection';
import Map from './Map';

import Pattern from './Pattern';
import RedSection from './RedSection';
import TableData from './TableData';
import Urna from './Urna';
import Wrapper from './Wrapper';

function App() {
  return (
    <Router>
    <div className="app">
       
        <Switch>
          <Route path='/page1'>
            <Header />
            <Wrapper />
            <CheckBox />
            <Pattern />
            <DoorOffer />
            <Fotter />
            
          </Route>
          <Route path='/page2'>
            <Header />
            <Map />
            <TableData />
            <Fotter />
          </Route>
          <Route path='/'>
              <Header />
              <HeroSection />
              <Banner />
              <Urna />
              <RedSection />
              <Fotter />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
