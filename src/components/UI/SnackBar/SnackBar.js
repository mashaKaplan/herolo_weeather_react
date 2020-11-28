import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './SnackBar.module.css';

const SnackBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    setTimeout(() => setIsOpen(true), 100);

    const snackClasses = [classes.SnackBar, isOpen ? classes.Open : ''].join(' ');
    return (
        <div className={snackClasses}>
            <p className={classes.Close} onClick={props.closeError}>x</p>
            <p>{props.error}</p>
        </div>
    )
};

SnackBar.propTypes = {
    error: PropTypes.string,
    closeError: PropTypes.func
};

export default SnackBar;