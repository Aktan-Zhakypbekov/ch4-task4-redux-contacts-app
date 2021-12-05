import React from 'react';
import './ListItem.css';

const ListItem = () => {
  return (
    <div className='list-item-cont'>
      <div className='list-item-cont__item-img'>
        <img
          src='https://i.pinimg.com/originals/a3/61/c5/a361c53d4a3a53165c0a6c5e03131348.jpg'
          alt='img'
        />
      </div>
      <div className='list-item-cont__info'>
        <div className='info__name'>
          <div>Vanessa Fahrmann</div>
          <button>HEART</button>
        </div>
        <div className='info__small-details'>
          <div className='info__small-details__adress'>Bishkek, Kyrgyzstan</div>
          <div className='info__small-details__phone'>+0995233232</div>
          <div className='info__small-details__website'>mysite.com</div>
          <div className='info__small-details__email'>email@jfjf.com</div>
        </div>
        <div className='info__btn-cont'>
          <button>Show</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
