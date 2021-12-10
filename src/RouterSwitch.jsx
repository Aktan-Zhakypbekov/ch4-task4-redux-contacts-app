import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './Nav';
import ContactPage from './ContactPage';

function RouterSwitch() {
  return (
    <div className='main-cont'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/item' element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default RouterSwitch;
