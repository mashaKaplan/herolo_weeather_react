import * as actionTypes from '../actionTypes';
import {fetchWeatherByKey, fetch5DaysWeather, fetchGeoLocation} from '../../utils/http-requests';
import {toggleLoading} from './coreActions';

export const getCurrentLocationWeather = (lat, lon, isMetric, faviroties) => {
    return dispatch => {
        // dispatch(toggleLoading(true));

        fetchGeoLocation(lat, lon).then(location => {
            const key = location.Key;
            const placeName = location.LocalizedName;
            setMainWeather(key, placeName, isMetric, dispatch, faviroties);
        }).catch(err => console.error(err));
    }
};

export const getWeatherByKey = (favorite, isMetric, faviroties) => {
  return dispatch => {
      setMainWeather(favorite.Key, favorite.LocalizedName, isMetric, dispatch, faviroties);
  }
};

export const setMainWeather = (key, placeName, isMetric, dispatch, faviroties) => {
    fetch5DaysWeather(key, isMetric).then(fiveDaysRes => {
        dispatch(set5Days(fiveDaysRes.data['DailyForecasts']));
    });

    fetchWeatherByKey(key, placeName).then(currentCond => {
        if (faviroties.some(item => item.Key === key)) {
            currentCond = {...currentCond, isFavourite: true}
        }
        dispatch(setCurrentConditions(currentCond));
        dispatch(toggleLoading(false));
    } );
};

export const set5Days = (weather5days) => {
  return {
      type: actionTypes.SET_5_DAYS,
      payload: weather5days
  }
};

export const setCurrentConditions = (current) => {
    return {
        type: actionTypes.SET_CURRENT_CONDITIONS,
        payload: current
    }
};

export const updateFavourites = (currentFavourites, updatedCurrent) => {
    let updatedFavourites;
    if (updatedCurrent.isFavourite && currentFavourites.every(item => item.Key !== updatedCurrent.Key)) {
        updatedFavourites = [...currentFavourites, {Key: updatedCurrent.Key, LocalizedName: updatedCurrent.LocalizedName}];
    } else {
        updatedFavourites = currentFavourites.filter(item => item.Key !== updatedCurrent.Key)
    }

    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));

    return {
        type: actionTypes.UPDATE_FAVOURITE,
        payload: {updatedFavourites, updatedCurrent}
    }
};

export const setFavourites = (favourites) => {
    return {
        type: actionTypes.SET_FAVOURITE,
        payload: favourites
    }
};