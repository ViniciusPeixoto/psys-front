import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBarComponent from './lib/components/navBar';

import './style/bootstrap.css';
import HomePage from './lib/pages/home';
import ProfilePage from './lib/pages/profile';
import PlantedPage from './lib/pages/planted';
import TreesPage from './lib/pages/trees';
import LoginPage from './lib/pages/login';
import { UserProvider } from './lib/components/userContext';
import UpdateProfilePage from './lib/pages/updateProfile';
import AccountPlantedPage from './lib/pages/accountPlanted';
import PlantTreePage from './lib/pages/plantTree';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <NavBarComponent />
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route exact path='/profile' Component={ProfilePage} />
            <Route exact path='/update-profile' Component={UpdateProfilePage} />
            <Route exact path='/account-planted' Component={AccountPlantedPage} />
            <Route exact path='/plant' Component={PlantTreePage} />
            <Route exact path='/planted' Component={PlantedPage} />
            <Route exact path='/trees' Component={TreesPage} />
            <Route exact path='/login' Component={LoginPage} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
