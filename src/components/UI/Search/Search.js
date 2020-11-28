import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './Search.module.css';
import search from '../../../assets/search.svg';
import SearchOption from '../SearchOption/SearchOption';
import {fetchAutoComplete} from "../../../utils/http-requests";
import withErrorHandler from '../../../hoc/WithErrorHandler';
import axiosInstance from '../../../utils/axious-instance';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState({
        value: '',
        validation: {
            required: true,
            onlyEn: true
        },
        isTouched: false,
        isValid: false,
        error: ''
    });
    const [searchOptions, setSearchOptions] = useState([]);
    const [searchOptionsOpened, setSearchOptionsOpened] = useState(false);

    const onSearchHandler = (event) => {
        const newSearch = {...searchValue};
        newSearch.value = event.target.value;
        newSearch.isTouched = true;
        [newSearch.isValid, newSearch.error] = checkValidaty(newSearch.validation, event.target.value);
        setSearchValue(newSearch);
        if (newSearch.isValid) {
            console.log(newSearch);
            fetchAutoComplete(newSearch.value).then(res => {
                if (res && res.length) {
                    setSearchOptions(res);
                } else {
                    setSearchOptions({LocalizedName: 'No results'});
                }
                setSearchOptionsOpened(true);
            });
        }
    };

    const onChoseItem = (item) => {
        const copyValue = {...searchValue, value: item.LocalizedName, isValid: true};
        setSearchValue(copyValue);
        setSearchOptionsOpened(false);
        props.searchOptionChosen(item);
    };

    const checkValidaty = (validation, value) => {
        if (!value) return [false, ''];
        const isEn = !!value && value.match(/^[a-zA-Z\- ]+$/);
        let isValid = isEn && value.length >= 2;
        let error = (value && isEn) ? '' : 'Wrong format';
        return [isValid, error];
    };

    return (
        <div>
              <div className={classes.Search}>
                  <img src={search} alt="search"/>
                  <input type="text"
                         onChange={(event) => onSearchHandler(event)}
                         value={searchValue.value}
                         placeholder="Search"
                         className={classes.Input}
                  />
              </div>

            {(searchOptions.length && searchOptionsOpened) ?
                <SearchOption options={searchOptions}
                              itemChose={(item) => onChoseItem(item)}/> : null}
            <p className={classes.Error}>{searchValue.error ? searchValue.error : ''}</p>
        </div>
    );
};

Search.propTypes = {
    searchOptionChosen: PropTypes.func
};

export default withErrorHandler(Search, axiosInstance);