import React from 'react';

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className='contact-info'>
        <div className='contact-info__img-cont'>
          <img src='#' alt='img' />
          <button className='heart'>HEART</button>
        </div>
        <div className='contact-info__text-info'>
          <div className='text-info__col'>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
          </div>
          <div className='text-info__col'>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
            <div>
              <input
                className='first-name'
                type='text'
                placeholder='first name'
              />
            </div>
            <div>
              <button className='first-name'>Save Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
