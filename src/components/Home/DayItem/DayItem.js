import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import WeatherDetail from './WeatherDetail/WeatherDetail';
import classes from './DayItem.module.css';

const DayTime = (props) => {
    return (
      <div className={classes.DayTime}>
          <Moment className={classes.WeekDay} format="ddd">{props.date}</Moment>
          <WeatherDetail icon={`${props.dayIcon}`} partDay='Day' value={props.maxTemperature.Value} unit={props.maxTemperature.Unit}/>
          <WeatherDetail icon={`${props.nightIcon}`} partDay='Night' value={props.minTemperature.Value} unit={props.minTemperature.Unit}/>
      </div>
    );
};

DayTime.propTypes = {
    date: PropTypes.string.isRequired,
    maxTemperature: PropTypes.object.isRequired,
    minTemperature: PropTypes.object.isRequired,
    nightIcon: PropTypes.number,
    dayIcon: PropTypes.number
};

export default DayTime;

