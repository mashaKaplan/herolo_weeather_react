import * as actionTypes from '../actionTypes';

const initialState = {
    isMenuOpen: false,
    isDayTime: 'day',
    theme: 'dark',
    mode: 'celsius',
    isLoading: false,
    error: null
};

const coreReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_MENU:
            return {
                ...state,
                isMenuOpen: action.payload ? action.payload.isOpen : !state.isMenuOpen
            };
        case actionTypes.SWITCH_THEME:
            return {
                ...state,
                theme: action.payload
            };
        case actionTypes.SWITCH_MODE:
            return {
                ...state,
                mode: action.payload
            };
        case actionTypes.SET_DAYTIME:
            return {
                ...state,
                isDayTime: action.payload
            };
        case actionTypes.TOOGLE_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default coreReducer;