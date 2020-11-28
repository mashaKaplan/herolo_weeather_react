import React from 'react';

import Title from './Title/Title';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Header.module.css';
import menu from "../../assets/menu.png";
import {useDispatch} from "react-redux";
import * as actions from "../../store/actions/coreActions";

const Header = (props) => {
    const dispatch = useDispatch();
    const toggleMenu = () => dispatch(actions.toggleMenu());

    return (
        <div className={classes.Header}>
            <Title/>
            <img src={menu} alt={menu} className={classes.Menu} onClick={toggleMenu}/>
            <NavigationItems isMobileHidden={true}/>
        </div>
    );
};

export default Header;