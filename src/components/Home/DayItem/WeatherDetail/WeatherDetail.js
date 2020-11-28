import React from 'react';
import PropTypes from 'prop-types';
import classes from "./WeatherDetail.module.css";
import {getIconSrc} from "../../../../utils/utils";

const WeatherDetail = (props) => {
    const iconSrc = getIconSrc(props.icon);
    return (
      <div className={classes.WeatherDetail}>
          <p className={classes.Temperature}>{props.partDay}: {props.value}{props.unit}</p>
          <img src={iconSrc} alt="icon"/>
      </div>
    );
};

WeatherDetail.propTypes = {
    icon: PropTypes.string.isRequired,
    partDay: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default WeatherDetail;