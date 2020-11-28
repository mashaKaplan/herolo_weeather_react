import * as actionTypes from '../actionTypes';

export function setError(err) {
    return {
        type: actionTypes.SET_ERROR,
        payload: err
    };
}


export const toggleMenu = (payload = null) => {
  return {
      type: actionTypes.TOOGLE_MENU,
      payload
  }
};

export const switchTheme = (theme) => {
    return {
        type: actionTypes.SWITCH_THEME,
        payload: theme
    }
};

export const switchMode = (mode) => {
    return {
        type: actionTypes.SWITCH_MODE,
        payload: mode
    }
};

export const setDayTime = (isDayTime) => {
    return {
        type: actionTypes.SET_DAYTIME,
        payload: isDayTime
    }
};

export const toggleLoading = (isLoading) => {
    console.log('loading');
    return {
        type: actionTypes.TOOGLE_LOADING,
        payload: isLoading
    }
};