import React, { useEffect } from 'react';
import './ListItem.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const ListItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function toContactPage() {
    navigate(`/${props.obj.id}`, { state: props.obj });
  }

  function toggleHeart(id) {
    dispatch({ type: 'TOGGLE_HEART', payload: id });
  }

  return (
    <div className='list-item-cont'>
      <div className='list-item-cont__item-img'>
        <img src={props.obj.image} alt='img' />
      </div>
      <div className='list-item-cont__info'>
        <div className='info__name'>
          <div>{`${props.obj.firstName} ${props.obj.lastName}`}</div>
          {props.obj.favorite ? (
            <button
              className='favorite like-button2'
              onClick={(e) => {
                toggleHeart(props.obj.id);
                if (props.obj.favorite) {
                  e.target.classList.add('favorite');
                  e.target.classList.remove('not-favorite');
                } else {
                  e.target.classList.add('not-favorite');
                  e.target.classList.remove('favorite');
                }
              }}
            >
              HEART
            </button>
          ) : (
            <button
              className='not-favorite like-button2'
              onClick={(e) => {
                toggleHeart(props.obj.id);
                if (props.obj.favorite) {
                  e.target.classList.add('favorite');
                  e.target.classList.remove('not-favorite');
                } else {
                  e.target.classList.add('not-favorite');
                  e.target.classList.remove('favorite');
                }
              }}
            >
              HEART
            </button>
          )}
        </div>
        <div className='info__small-details'>
          <div className='info__small-details__adress'>
            {`${props.obj.city}, ${props.obj.country}`}
          </div>
          <div className='info__small-details__phone'>
            {props.obj.phoneNumber}
          </div>
          <div className='info__small-details__website'>
            {props.obj.website}
          </div>
          <div className='info__small-details__email'>{props.obj.email}</div>
        </div>
        <div className='info__btn-cont'>
          <button onClick={toContactPage} className='info__btn-cont__btn'>
            Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
