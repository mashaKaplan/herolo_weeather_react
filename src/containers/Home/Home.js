import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import * as actions from '../../store/actions/coreActions';
import * as homeActions from '../../store/actions/homeActions';
import Search from '../../components/UI/Search/Search';
import DayItemList from '../../components/Home/DayItemList/DayItemList';
import SearchResult from '../../components/Home/SearchResult/SearchResult';
import withErrorHandler from '../../hoc/WithErrorHandler';
import axiosInstance from '../../utils/axious-instance';
import classes from './Home.module.css';
import Loader from "../../components/UI/Loader/Loader";

const Home = () => {
    const {id} = useParams();
    const isMetric = useSelector(state => state.core.mode) === 'celsius';
    const fiveDays = useSelector(state => state.home.fiveDays);
    const loading = useSelector(state => state.core.isLoading);
    const isLightTheme = useSelector(state => state.core.theme === 'light');
    const currentConditions = useSelector(state => state.home.currentConditions);
    const currentfavourites = useSelector(state => state.home.favourites);

    const favoriteById = currentfavourites.find(item => item.Key === id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.toggleMenu({isOpen: false}));

        if (favoriteById) {
            getWeatherByFavoriteKey(favoriteById)
        } else {
            getCurrentLocationWeather();
        }
    }, [isMetric]);

    useEffect(() => {
        dispatch(actions.setDayTime(currentConditions?.IsDayTime));
    }, [currentConditions]);

    const getWeatherByFavoriteKey = useCallback((favoriteById) => {
        dispatch(homeActions.getWeatherByKey(favoriteById, isMetric, currentfavourites))
    }, [dispatch, isMetric]);

    const getCurrentLocationWeather =
        useCallback(() => navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            dispatch(homeActions.getCurrentLocationWeather(lat, lon, isMetric, currentfavourites));
        }), [dispatch, isMetric]);

    const favouriteHandler = () => {
        const copyCurrentPlace = {
            ...currentConditions
        };
        copyCurrentPlace.isFavourite = !copyCurrentPlace.isFavourite;
        dispatch(homeActions.updateFavourites(currentfavourites, copyCurrentPlace));
    };

    const contentClasses = [classes.Content, classes[currentConditions?.WeatherText] || classes.Clear].join(' ');
    const tempValue = currentConditions ? (isMetric ? currentConditions.Temperature.Metric.Value : currentConditions.Temperature.Imperial.Value) : null;
    const tempUnit = currentConditions ? (isMetric ? currentConditions.Temperature.Metric.Unit : currentConditions.Temperature.Imperial.Unit) : '';

    const content = loading ?
        <Loader isLight={isLightTheme}/> : currentConditions ?
            <div className={contentClasses}>
                <SearchResult isFavourite={currentConditions?.isFavourite}
                              favouriteHandler={favouriteHandler}
                              tooltip={currentConditions?.isFavourite ? 'Remove from Favourite' : 'Add to Favourite'}
                              place={currentConditions?.LocalizedName}
                              temperature={tempValue}
                              unit={tempUnit}
                              icon={`${currentConditions?.WeatherIcon}`}
                />
                <DayItemList days={fiveDays}/>
            </div> : null;
        return (
        <div className={classes.Home}>
            <Search searchOptionChosen={(event) => getWeatherByFavoriteKey({Key: event.Key, LocalizedName: event.LocalizedName})}/>
            {content}
        </div>
    );
};

export default withErrorHandler(Home, axiosInstance);