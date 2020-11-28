import React from 'react';
import {useSelector} from 'react-redux';
import classes from './SideBar.module.css';
import NavigationItems from "../Header/NavigationItems/NavigationItems";

const SideBar = () => {
    const isMenuOpen = useSelector(state => state.core.isMenuOpen);
    const sideClass = [classes.SideBar, isMenuOpen ? classes.Open : ''];
    return (
        <div className={sideClass.join(' ')}>
            <NavigationItems/>
        </div>
    );
};

export default SideBar;