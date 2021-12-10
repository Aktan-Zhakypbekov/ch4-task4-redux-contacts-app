import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './Nav';
import ContactPage from './ContactPage';

function RouterSwitch() {
  return (
    <div className='main-cont'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/item' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterSwitch;
