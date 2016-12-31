import { getCharacters } from '../../services';
import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const REQUEST_GET_ALL_CHARACTERS    = 'REQUEST_ALL_CHARACTERS';
const RECEIVED_GET_ALL_CHARACTERS   = 'RECEIVED_ALL_CHARACTERS';
const ERROR_GET_ALL_CHARACTERS      = 'ERROR_GET_ALL_CHARACTERS';

// const REQUEST_GET_CHARACTER_DETAILS   = 'REQUEST_GET_CHARACTER_DETAILS';
// const RECEIVED_GET_CHARACTER_DETAILS  = 'RECEIVED_GET_CHARACTER_DETAILS';
// const ERROR_GET_CHARACTER_DETAILS     = 'ERROR_GET_CHARACTER_DETAILS';

// /////////////////////
// reducer
// /////////////////////
const initialState = {
  time:       '',
  isFetching: false,
  characters: []
};

export default function (state = initialState, action) {
  const time = moment().format(dateFormat);

  switch (action.type) {

  case REQUEST_GET_ALL_CHARACTERS:
    return {
      ...state,
      isFetching: true,
      time
    };

  case RECEIVED_GET_ALL_CHARACTERS:
    return {
      ...state,
      isFetching: false,
      time,
      characters: [...action.characters]
    };

  case ERROR_GET_ALL_CHARACTERS:
    return {
      ...state,
      isFetching: false,
      time,
      error: {...action.error}
    };

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
function requestGetAllCharacters() {
  return {
    type: REQUEST_GET_ALL_CHARACTERS
  };
}

function receivedGetAllCharacters(characters = []) {
  return {
    type: RECEIVED_GET_ALL_CHARACTERS,
    characters
  };
}

function errorGetAllCharacters(error = {message: 'error not defined'}) {
  return {
    type: RECEIVED_GET_ALL_CHARACTERS,
    error
  };
}

function getAllCharacters() {
  return dispatch => {
    dispatch(requestGetAllCharacters());
    return getCharacters()
      .then(response => dispatch(receivedGetAllCharacters(response.data.results)))
      .catch(error => dispatch(errorGetAllCharacters(error)));
  };
}

export function getAllCharactersIfNeeded() {
  return (dispatch, getState) => {
    if (shouldGetAllCharacters(getState())) {
      return dispatch(getAllCharacters());
    }
    return false;
  };
}

function shouldGetAllCharacters(state) {
  const charactersStore = state.characters;
  if (charactersStore.isFetching) {
    return false;
  }
  return true;
}
