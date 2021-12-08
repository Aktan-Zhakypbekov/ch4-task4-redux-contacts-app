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

function searchLaunched(state = false, action) {
  if (action.type === 'ALERT_SEARCH_LAUNCHED') {
    return true;
  } else if (action.type === 'CLEAN_ALL_SEARCHED_DATA') {
    return false;
  }
  return state;
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
    if (JSON.parse(localStorage.getItem('data'))) {
      let newArr = JSON.parse(localStorage.getItem('data'));
      newArr.map((elem) => (elem.searched = false));
      state = [...newArr];
    } else {
      let newArr = [...action.payload];
      newArr = newArr.map((elem) => {
        elem.favorite = false;
        elem.searched = false;
        return elem;
      });
      localStorage.setItem('data', JSON.stringify(newArr));
      state = JSON.parse(localStorage.getItem('data'));
    }
    return state;
  } else if (action.type === 'SORT_AZ') {
    let newArr = [...state];
    localStorage.setItem('data', JSON.stringify(newArr.sort(sortAZ)));
    console.log(newArr);
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
  } else if (action.type === 'SAVE_CONTACT') {
    let newArr = [...state];
    newArr[newArr.findIndex((elem) => elem.id == action.payload.id)] = {
      ...action.payload,
    };
    localStorage.setItem('data', JSON.stringify(newArr));
    console.log(newArr);
    return newArr;
  } else if (action.type === 'LAUNCH_SEARCH') {
    let newArr = [...state];
    newArr.map((elem) => (elem.searched = false));
    if (
      newArr.filter(
        (elem) =>
          `${elem.firstName} ${elem.lastName}`.toLowerCase() ==
          action.payload.toLowerCase()
      ).length != 0
    ) {
      console.log(action.payload);
      newArr[
        newArr.findIndex(
          (elem) =>
            `${elem.firstName} ${elem.lastName}`.toLowerCase() ==
            action.payload.toLowerCase()
        )
      ].searched = true;
    }
    return newArr;
  } else if (action.type === 'CLEAN_SEARCHED_TO_FALSE') {
    let newArr = [...state];
    newArr.map((elem) => (elem.searched = false));
    return newArr;
  }
  return state;
}
const allReducers = combineReducers({
  heartToggled,
  dataReducer,
  searchLaunched,
});

export default allReducers;
