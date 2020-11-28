import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import classes from './Title.module.css';
import night from '../../../assets/moon.png';
import day from '../../../assets/sun.png';
import Aux from '../../../hoc/Auxilirate';

const Title = () => {
    const isDayTime = useSelector(state => state.core.isDayTime);
    const image = isDayTime ? day : night;

    return (
        <Aux>
            <Link to={'/home'}>
                <div className={classes.Title}>Herolo weather</div>
                <img className={classes.Image} src={image} alt="moon"/>
            </Link>
        </Aux>
    )
};

export default Title;