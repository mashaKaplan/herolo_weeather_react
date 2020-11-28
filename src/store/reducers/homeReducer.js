import * as actionTypes from '../actionTypes';

const initialState = {
  fiveDays: [],
  currentConditions: null,
  favourites: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_5_DAYS:
            return {
                ...state,
                fiveDays: action.payload
            };
        case actionTypes.SET_CURRENT_CONDITIONS:
            return {
                ...state,
                currentConditions: action.payload
            };
        case actionTypes.UPDATE_FAVOURITE:
            return {
                ...state,
                favourites: action.payload.updatedFavourites,
                currentConditions: action.payload.updatedCurrent
            };
        case actionTypes.SET_FAVOURITE:
            return {
                ...state,
                favourites: action.payload
            };
        default:
            return state;
    }
};

export default homeReducer;