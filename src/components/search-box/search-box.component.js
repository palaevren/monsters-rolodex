import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placehodler, handleChange}) => (
    <input className='search' type='search' placeholder={placehodler}
        onChange={handleChange}/>
)