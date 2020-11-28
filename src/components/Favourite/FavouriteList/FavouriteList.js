import React from 'react';
import PropTypes from 'prop-types';
import FavourateItem from '../FavourateItem/FavourateItem';
import EmptyView from '../EmptyView/EmptyView';
import classes from './FavouriteList.module.css';

const FavouriteList = (props) => {
    console.log(props.favourites);
    const tempType = props.isMetric ? 'Metric' : 'Imperial';
    const content = props.favourites?.length ? props.favourites.map(item => item ? <FavourateItem city={item?.LocalizedName}
                                                                                          description={item?.WeatherText}
                                                                                          temperature={item?.Temperature[tempType].Value}
                                                                                          unit={item?.Temperature[tempType].Unit}
                                                                                          iconNumber={`${item?.WeatherIcon}`}
                                                                                          id={item?.Key}
                                                                                          key={item?.Key}
    /> : null) : <EmptyView theme={props.theme}/>;

    return (
        <div className={classes.FavouriteList}>
            {content}
        </div>
    )
};

FavouriteList.propTypes = {
    isMetric: PropTypes.bool,
    favourites: PropTypes.array,
    theme: PropTypes.string.isRequired
};

export default FavouriteList;