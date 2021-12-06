import { combineReducers } from 'redux';

function sortAZ(a, b) {
  if (a.firstName < b.firstName) {
    return -1;
  }
  if (a.firstName > b.firstName) {
    return 1;
  }
  return 0;
}

function heartToggled(state = false, action) {
  if (action.type === 'TOGGLE_HEART_MAIN') {
    console.log(!state);
    return !state;
  }
  return state;
}

function dataReducer(state = [], action) {
  if (action.type === 'DATA_FETCH') {
    let newArr = [...action.payload];
    newArr = newArr.map((elem) => {
      elem.favorite = false;
      return elem;
    });
    localStorage.setItem('data', JSON.stringify(newArr));
    state = JSON.parse(localStorage.getItem('data'));
    return state;
  } else if (action.type === 'SORT_AZ') {
    let newArr = [...state];
    localStorage.setItem('data', JSON.stringify(newArr.sort(sortAZ)));
    return newArr.sort(sortAZ);
  } else if (action.type === 'SORT_ZA') {
    let newArr = [...state];
    localStorage.setItem('data', JSON.stringify(newArr.sort(sortAZ).reverse()));
    return newArr.sort(sortAZ).reverse();
  } else if (action.type === 'TOGGLE_HEART') {
    let newArr = [...state];
    newArr[newArr.findIndex((elem) => elem.id == action.payload)].favorite =
      !newArr[newArr.findIndex((elem) => elem.id == action.payload)].favorite;
    localStorage.setItem('data', JSON.stringify(newArr));
    return newArr;
  }
  return state;
}
const allReducers = combineReducers({
  heartToggled,
  dataReducer,
});

export default allReducers;
