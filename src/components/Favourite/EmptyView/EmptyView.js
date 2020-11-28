import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classes from './EmptyView.module.css';

const EmptyView = (props) => {
    const lightClass = props.theme === 'light' ? classes.Light : '';

    return (
        <div className={classes.EmptyContainer}>
            <p className={[classes.EmptyList, lightClass].join(' ')}>No favourite cities</p>
            <p className={[classes.Navigation, lightClass].join(' ')}>Go to
                <Link to='/'> search </Link>
            </p>
        </div>
    );
};

EmptyView.propTypes = {
    theme: PropTypes.string
};

export default EmptyView;