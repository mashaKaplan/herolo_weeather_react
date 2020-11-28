import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import classes from './SearchResult.module.css';
import favourite from '../../../assets/heart_fill.svg';
import notFavourite from '../../../assets/heart.svg';
import {getIconSrc} from "../../../utils/utils";

const SearchResult = (props) => {
    const imageSrc = props.isFavourite ? favourite : notFavourite;
    const iconSrc = getIconSrc(props.icon);
    return (
      <div className={classes.SearchResult}>
          <div className={classes.Location}>
              <img className={classes.WeatherIcon}
                  src={iconSrc} alt="icon"/>
              <div className={classes.PlaceWrapper}>
                  <p className={classes.Place}>{props.place}</p>
                  <p className={classes.Temperature}>{props.temperature}{props.unit}</p>
              </div>
          </div>
          <img src={imageSrc} alt="favourite" className={classes.Heart}
               data-tip={props.tooltip}
               onClick={props.favouriteHandler}/>
          <ReactTooltip type={"light"} />
      </div>
    );
};

SearchResult.propTypes = {
    isFavourite: PropTypes.bool,
    favouriteHandler: PropTypes.func.isRequired,
    tooltip: PropTypes.string.isRequired,
    place: PropTypes.string,
    temperature: PropTypes.number,
    unit: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default SearchResult;