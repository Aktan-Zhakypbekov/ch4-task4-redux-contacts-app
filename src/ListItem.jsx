import React from 'react';
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
          <button
            onClick={() => {
              toggleHeart(props.obj.id);
            }}
          >
            HEART
          </button>
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
          <button onClick={toContactPage}>Show</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
