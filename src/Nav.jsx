import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <div className='nav__logo__img-cont'>
          <img src='https://www.pngkey.com/png/full/87-873887_call-phone-icon-gray-png.png' />
        </div>
        <div className='my-contacts'>MyContacts</div>
      </div>
      <Link className='nav__link' to='/'>
        HomePage
      </Link>
    </div>
  );
};

export default Nav;
