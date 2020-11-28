import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../store/actions/coreActions';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Auxilirate';
import ToggleContainer from "../../UI/ToggleContainer/ToggleContainer";

const NavigationItems = (props) => {
    const navigationClasses = [classes.NavigationItems, props.isMobileHidden ? classes.Hidden : ''];
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.core.theme);
    const currentMode = useSelector(state => state.core.mode);
    const themeOptions = ['dark', 'light'];
    const modeOptions = ['celsius', 'fahrenheit'];

    const handleThemeToggle = (theme) => dispatch(actions.switchTheme(theme));
    const handleModeToggle = (mode) => dispatch(actions.switchMode(mode));
    return (
        <Aux>
            <div className={navigationClasses.join(' ')}>
                <div className={classes.Toggles}>
                    <ToggleContainer options={themeOptions} checked={currentTheme === themeOptions[1]}
                                     handleToggle={(theme) => handleThemeToggle(theme)}/>
                    <ToggleContainer options={modeOptions} checked={currentMode === modeOptions[1]}
                                     handleToggle={(mode) => handleModeToggle(mode)}/>
                </div>
                <NavigationItem link="/home">Home</NavigationItem>
                <NavigationItem link="/favourite">Favourite</NavigationItem>
            </div>
        </Aux>
    );
};

NavigationItems.propTypes = {
    isMobileHidden: PropTypes.bool
};

export default NavigationItems;