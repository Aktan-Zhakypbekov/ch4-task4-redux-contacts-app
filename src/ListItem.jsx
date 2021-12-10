import React, { useEffect } from 'react';
import './ListItem.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const ListItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function toContactPage() {
    navigate(`/mainpage/${props.obj.id}`, { state: props.obj });
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
            <div
              className='favorite-btn'
              onClick={(e) => {
                toggleHeart(props.obj.id);
                if (props.obj.favorite) {
                  e.target.classList.add('favorite-btn');
                  e.target.classList.remove('not-favorite-btn');
                } else {
                  e.target.classList.add('not-favorite-btn');
                  e.target.classList.remove('favorite-btn');
                }
              }}
            ></div>
          ) : (
            <div
              className='not-favorite-btn'
              onClick={(e) => {
                toggleHeart(props.obj.id);
                if (props.obj.favorite) {
                  e.target.classList.add('favorite-btn');
                  e.target.classList.remove('not-favorite-btn');
                } else {
                  e.target.classList.add('not-favorite-btn');
                  e.target.classList.remove('favorite-btn');
                }
              }}
            ></div>
          )}
        </div>
        <div className='info__small-details'>
          <div className='info__small-details__adress'>
            <div className='small-icon-cont'>
              <img
                src='https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png'
                alt=''
              />
            </div>
            <div>{`${props.obj.city}, ${props.obj.country}`}</div>
          </div>
          <div className='info__small-details__phone'>
            <div className='small-icon-cont'>
              <img
                src='https://www.pngfind.com/pngs/m/66-666166_customer-service-telephone-numbers-svg-png-icon-free.png'
                alt=''
              />
            </div>
            <div>{props.obj.phoneNumber}</div>
          </div>
          <div className='info__small-details__website'>
            <div className='small-icon-cont'>
              <img
                src='https://i.pinimg.com/736x/ea/b4/70/eab4700ec044e504ef73c3a6eb6b03e6.jpg'
                alt=''
              />
            </div>
            <div>{props.obj.website}</div>
          </div>
          <div className='info__small-details__email'>
            <div className='small-icon-cont'>
              <img
                src='https://toppng.com/uploads/preview/email-icon-vector-circle-11549825158ieiklzfl8g.png'
                alt=''
              />
            </div>
            <div>{props.obj.email}</div>
          </div>
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
