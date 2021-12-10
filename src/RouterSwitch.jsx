import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './Nav';
import ContactPage from './ContactPage';

function RouterSwitch() {
  return (
    <BrowserRouter>
      <div className='main-cont'>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='https://aktan-zhakypbekov.github.io/ch4-task4-redux-contacts-app/:id'
            element={<ContactPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterSwitch;
