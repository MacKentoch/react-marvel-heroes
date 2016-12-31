import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';
const ENTER_FICHE_VIEW = 'ENTER_FICHE_VIEW';
const LEAVE_FICHE_VIEW = 'LEAVE_FICHE_VIEW';


// /////////////////////
// reducer
// /////////////////////
const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null,
  characterId:  null
};

export default function (state = initialState, action) {
  const time = moment().format(dateFormat);

  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_FICHE_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    time,
        leaveTime:    null,
        characterId:  action.characterId
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_FICHE_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        leaveTime:    time
      };
    }
    return state;

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function enterHome() {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home'
  };
}

export function leaveHome() {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home'
  };
}

export function enterFiche(characterId = -1) {
  return {
    type:         ENTER_FICHE_VIEW,
    currentView:  'fiche',
    characterId
  };
}

export function leaveFiche() {
  return {
    type:         LEAVE_FICHE_VIEW,
    currentView:  'fiche'
  };
}
