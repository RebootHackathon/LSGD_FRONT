import React from 'react';

import classes from './SearchForm.css';
const SearchForm =(props)=>{
    return(
        <div className={classes.SearchForm}>
            <form>
                    <input type="text" placeholder="Aadhar Number" onChange={props.onInputChange} />

                    <button type="submit" onClick={props.clicked}>Search</button>
                </form>
        </div>
    )

}

export default SearchForm;