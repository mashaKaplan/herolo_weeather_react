import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import * as actions from '../../store/actions/homeActions';
import classes from './Layout.module.css';

const Layout = (props) => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.core.isMenuOpen);
    const isLightTheme = useSelector(state => state.core.theme === 'light');
    const layoutClasses = [classes.Layout, isMenuOpen ? classes.Cropped : '', isLightTheme ? classes.Light : ''].join(' ');

    useEffect(() => {
        const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        dispatch(actions.setFavourites(savedFavourites));
    }, [dispatch]);

    return (
        <div className={layoutClasses}>
            <Header/>
            <SideBar/>
            <main className={classes.Main}>{props.children}</main>
        </div>
    );
};

export default Layout;