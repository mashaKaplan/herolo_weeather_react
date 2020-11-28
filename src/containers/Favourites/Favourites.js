import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import FavouriteList from '../../components/Favourite/FavouriteList/FavouriteList';
import classes from './Favourites.module.css';
import * as actions from "../../store/actions/coreActions";
import {fetchWeatherByKey} from '../../utils/http-requests';
import withErrorHandler from '../../hoc/WithErrorHandler';
import axiosInstance from '../../utils/axious-instance';
import Loader from "../../components/UI/Loader/Loader";


const Favourite = (props) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.core.theme);
    const isMetric = useSelector(state => state.core.mode) === 'celsius';
    const isLoading = useSelector(state => state.core.isLoading);
    let currentFavourites = useSelector(state => state.home.favourites);
    const [currentFavouritesToDisplay, setCurrentFavouritesToDisplay] = useState([]);


    useEffect(() => {
        dispatch(actions.toggleMenu({isOpen: false}));
        fetchDataForFavourites();
    }, [dispatch]);

    const fetchDataForFavourites = useCallback(() => {
        dispatch(actions.toggleLoading(true));
        const toDisplay = [];
        currentFavourites.forEach(item =>  {
            fetchWeatherByKey(item.Key, item.LocalizedName)
                .then(data => {
                    toDisplay.push(data);
                    setCurrentFavouritesToDisplay(toDisplay);
                })
        })
    }, [setCurrentFavouritesToDisplay, dispatch, currentFavourites]);

    console.log(currentFavouritesToDisplay);

    return (
        <div className={classes.Favourites}>
            {isLoading ? <Loader isLight={theme === 'light'}/> : <FavouriteList favourites={currentFavouritesToDisplay}
                                                                                isMetric={isMetric}
                                                                                theme={theme}/>}
        </div>
    )
};

export default withErrorHandler(Favourite, axiosInstance);