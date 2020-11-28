import React from 'react';
import PropTypes from 'prop-types';
import classes from './SearchOption.module.css';

const SearchOptions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.options.map(item => <p key={item.Key}
                                          onClick={() => item.Key ? props.itemChose(item) : null}
                                          className={classes.Option}>{item.LocalizedName}</p>)}
        </div>
    );
};

SearchOptions.propTypes = {
    options: PropTypes.array,
    itemChose: PropTypes.func
};

export default SearchOptions;