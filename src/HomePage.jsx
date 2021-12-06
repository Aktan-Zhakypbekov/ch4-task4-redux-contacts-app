import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';

function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.dataReducer;
  });
  const toggled = useSelector((state) => {
    return state.heartToggled;
  });

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'DATA_FETCH', payload: response.data });
      });
  }, []);

  function sortAZ() {
    dispatch({ type: 'SORT_AZ' });
  }
  function sortZA() {
    dispatch({ type: 'SORT_ZA' });
  }
  function toggleHeart() {
    dispatch({ type: 'TOGGLE_HEART_MAIN' });
  }

  return (
    <div className='home-page'>
      <div className='display'>
        <div className='list-funcs'>
          <div className='list-funcs__search-cont'>
            <input type='text' className='list-funcs__search-cont__search' />
          </div>
          <div className='list-funcs__funcs-cont'>
            <button
              className='list-funcs__funcs-cont__filter-favs btn'
              onClick={() => {
                toggleHeart();
              }}
            >
              Filter
            </button>
            <button
              className='list-funcs__funcs-cont__sort-a-z btn'
              onClick={sortAZ}
            >
              A-Z
            </button>
            <button
              className='list-funcs__funcs-cont__sort-z-a btn'
              onClick={sortZA}
            >
              Z-A
            </button>
          </div>
        </div>
        <div className='list'>
          {!toggled
            ? data.map((elem) => {
                return <ListItem obj={elem} key={elem.id} />;
              })
            : data.map((elem) => {
                if (elem.favorite) {
                  return <ListItem obj={elem} key={elem.id} />;
                }
              })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
