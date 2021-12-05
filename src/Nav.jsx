import React from 'react';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <div className='nav__logo__img-cont'>
          <img src='https://www.pngkey.com/png/full/87-873887_call-phone-icon-gray-png.png' />
        </div>
        <div className='my-contacts'>My Contacts</div>
      </div>
      <a className='nav__link' href='#'>
        HomePage
      </a>
    </div>
  );
};

export default Nav;
