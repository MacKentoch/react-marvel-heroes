import { getCharacterInfo } from '../../services';
import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const REQUEST_GET_CHARACTER_DETAILS   = 'REQUEST_GET_CHARACTER_DETAILS';
const RECEIVED_GET_CHARACTER_DETAILS  = 'RECEIVED_GET_CHARACTER_DETAILS';
const ERROR_GET_CHARACTER_DETAILS     = 'ERROR_GET_CHARACTER_DETAILS';

// /////////////////////
// reducer
// /////////////////////
const emptyCharacter = {
  id: 0,
  name: '',
  description: '',
  thumbnail: {
    path: '',
    extension: ''
  },
  comics: [],
  series: []
};

const initialState = {
  time:       '',
  isFetching: false,
  ...emptyCharacter
};

export default function (state = initialState, action) {
  const time = moment().format(dateFormat);

  switch (action.type) {

  case REQUEST_GET_CHARACTER_DETAILS:
    return {
      ...state,
      isFetching: true,
      time,
      id: action.id
    };

  case RECEIVED_GET_CHARACTER_DETAILS:
    return {
      ...state,
      isFetching: false,
      time,
      id: action.id,
      name: action.name,
      description: action.description,
      thumbnail: { ...action.thumbnail },
      comics: [ ...action.comics ],
      series: [ ...action.series ]
    };

  case ERROR_GET_CHARACTER_DETAILS:
    return {
      ...state,
      isFetching: false,
      time,
      error: { ...action.error }
    };

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
function requestGetCharacterDetails(id = 0) {
  return {
    type: REQUEST_GET_CHARACTER_DETAILS,
    id
  };
}

function receivedGetCharacterDetails(character = {...emptyCharacter}) {
  return {
    type: RECEIVED_GET_CHARACTER_DETAILS,
    id: character.id,
    name: character.name,
    description: character.description,
    thumbnail: character.thumbnail,
    series: [...character.series.items],
    comics: [...character.comics.items]
  };
}

function errorGetAllCharacterDetails(error = {message: 'error not defined'}) {
  return {
    type: RECEIVED_GET_CHARACTER_DETAILS,
    error
  };
}

function getCharacterDetails(id) {
  return dispatch => {
    dispatch(requestGetCharacterDetails(id));
    return getCharacterInfo(id)
      .then(response => dispatch(receivedGetCharacterDetails(response.data.results[0])))
      .catch(error => dispatch(errorGetAllCharacterDetails(error)));
  };
}

export function getCharacterDetailsIfNeeded(id = 0) {
  return (dispatch, getState) => {
    if (shouldGetCharacterDetails(getState())) {
      return dispatch(getCharacterDetails(id));
    }
    return false;
  };
}

function shouldGetCharacterDetails(state) {
  const characterDetails = state.characterDetails;
  if (characterDetails.isFetching) {
    return false;
  }
  return true;
}
