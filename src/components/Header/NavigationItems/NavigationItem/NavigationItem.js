import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <div className={classes.NavigationItem}>
            <NavLink
                activeClassName={classes.active}
                to={props.link}>{props.children}</NavLink>
        </div>
    );
};

export default NavigationItem;