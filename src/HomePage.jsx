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

  const searchLaunched = useSelector((state) => {
    return state.searchLaunched;
  });

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'DATA_FETCH', payload: response.data });
      });
  }, []);

  useEffect(() => {
    /*document.querySelector('.like-button').addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('liked');
    });*/
    if (searchLaunched) {
      let backBtn = document.createElement('button');
      backBtn.className = 'back-btn';
      backBtn.textContent = 'Back';
      backBtn.addEventListener('click', (e) => {
        cleanAllSearchedData();
        cleanSearchedToFalse();
      });
      document.querySelector('.list-funcs__search-cont').appendChild(backBtn);
    } else {
      if (document.querySelector('.back-btn')) {
        document.querySelector('.back-btn').remove();
      }
    }
  }, [searchLaunched]);

  function sortAZ() {
    dispatch({ type: 'SORT_AZ' });
  }
  function sortZA() {
    dispatch({ type: 'SORT_ZA' });
  }
  function toggleHeart() {
    dispatch({ type: 'TOGGLE_HEART_MAIN' });
  }
  function launchSearch(term) {
    dispatch({ type: 'LAUNCH_SEARCH', payload: term });
  }
  function alertSearchLaunched() {
    dispatch({ type: 'ALERT_SEARCH_LAUNCHED' });
  }
  function cleanAllSearchedData() {
    dispatch({ type: 'CLEAN_ALL_SEARCHED_DATA' });
  }
  function cleanSearchedToFalse() {
    dispatch({ type: 'CLEAN_SEARCHED_TO_FALSE' });
  }

  return (
    <div className='home-page'>
      <div className='display'>
        <div className='list-funcs'>
          <div className='list-funcs__search-cont'>
            <form
              className='search-form1'
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.firstChild.value);
                launchSearch(e.target.firstChild.value);
                alertSearchLaunched();
              }}
            >
              <input
                type='text'
                className='list-funcs__search-cont__search'
                placeholder='Enter the full name of the contact'
                required
              />
              <button type='submit' className='search-btn'>
                Search
              </button>
            </form>
          </div>
          <div className='list-funcs__funcs-cont'>
            <div className='toggled-fav-cont'>
              <div
                className='list-funcs__funcs-cont__filter-favs filter-favs-btn toggled-fav'
                onClick={(e) => {
                  toggleHeart();
                }}
              ></div>
            </div>

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
          {searchLaunched ? (
            data.filter((elem) => elem.searched === true).length != 0 ? (
              data.map((elem) => {
                if (elem.searched) {
                  //cleanAllSearchedData();
                  return <ListItem obj={elem} key={elem.id} />;
                }
              })
            ) : (
              <p>Not Found</p>
            )
          ) : !toggled ? (
            data.map((elem) => {
              return <ListItem obj={elem} key={elem.id} />;
            })
          ) : (
            data.map((elem) => {
              if (elem.favorite) {
                return <ListItem obj={elem} key={elem.id} />;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
