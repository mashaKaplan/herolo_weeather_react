import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './FavourateItem.module.css';
import {getIconSrc} from "../../../utils/utils";

const FavouriteItem = (props) => {
    const iconSrc = getIconSrc(props.iconNumber);
    return (
        <Link to={`/home/${props.id}`}>
            <div className={classes.FavouriteItem}>
                <p className={classes.City}>{props.city}</p>
                <p className={classes.Temperature}>{props.temperature} {props.unit}</p>
                <img className={classes.Icon} src={iconSrc} alt="icon"/>
                <p className={classes.City}>{props.description}</p>
            </div>
        </Link>
    );
};

FavouriteItem.propTypes = {
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    iconNumber: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default FavouriteItem;