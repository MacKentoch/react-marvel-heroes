import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const SCREEN_SIZE_WIDTH_CHANGE  = 'SCREEN_SIZE_WIDTH_CHANGE';

// /////////////////////
// reducer
// /////////////////////
const initialState = {
  time: '',
  screenWidth: 1920
};

export default function (state = initialState, action) {
  const time = moment().format(dateFormat);

  switch (action.type) {

  case SCREEN_SIZE_WIDTH_CHANGE:
    return {
      ...state,
      screenWidth: action.screenWidth,
      time
    };

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function screenWidthChange() {
  const screenWidth = window.innerWidth || '1920';
  return {
    type: SCREEN_SIZE_WIDTH_CHANGE,
    screenWidth
  };
}
