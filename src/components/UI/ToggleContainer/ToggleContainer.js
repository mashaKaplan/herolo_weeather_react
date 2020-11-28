import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './ToggleContainer.module.css';
import "react-toggle/style.css";

const ToggleContainer = (props) => {
    const [isToggled, setToggleState] = useState(props.checked);
    const onToggle = (isChecked) => {
        setToggleState(isChecked);
        props.handleToggle(isChecked ? props.options[1] : props.options[0])
    };


    return (
        <label className={classes.Wrapper}>
            <span className={[classes.Option, !isToggled ? classes.Active : ''].join(' ')}>{props.options[0]}</span>
            <label className={classes.ToggleSwitch}>
                <input type="checkbox" checked={isToggled} onChange={() => onToggle(!isToggled)}/>
                <span className={classes.Switch} />
            </label>
            <span className={[classes.Option, isToggled ? classes.Active : ''].join(' ')}>{props.options[1]}</span>
        </label>
    );
};

ToggleContainer.propTypes = {
  checked: PropTypes.bool,
  options: PropTypes.array,
  handleToggle: PropTypes.func
};

export default ToggleContainer;
