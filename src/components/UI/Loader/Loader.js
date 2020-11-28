import React from 'react';
import PropTypes from 'prop-types';
import classes from './Loader.module.css';

const Loader = (props) => {
    const themeClass = props.isLight ? classes.Light : '';
    return (
        <div className={classes.LoaderWrapper}>
            <div className={[classes.Loader, themeClass].join(' ')}>Loading...</div>
        </div>
    )
};

Loader.propTypes = {
    isLight: PropTypes.bool
};

export default Loader;