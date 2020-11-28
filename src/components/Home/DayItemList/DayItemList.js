import React from 'react';
import PropTypes from 'prop-types';

import DayTime from '../DayItem/DayItem';
import classes from './DayItemList.module.css';

const DayTimeList = (props) => {
    return (
        <div className={classes.DayItemList}>
            {props.days.map(item => <DayTime date={item.Date}
                                       minTemperature={item.Temperature.Minimum}
                                       maxTemperature={item.Temperature.Maximum}
                                       dayIcon={item.Day.Icon}
                                       nightIcon={item.Night.Icon}
                                       key={item.Link}
            />)}
        </div>
    );
};

DayTimeList.propTypes = {
    days: PropTypes.array
};

export default DayTimeList;