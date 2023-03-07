import React, { useState } from 'react'
import './TodoSearch.css'

export const TodoSearch = ({searchValue, setSearchValue}) => {

    const onSearchValueChange = ({target}) => {
        console.log(target.value);
        setSearchValue(target.value);
    }

    return(
        <input 
        className='TodoSearch' 
        placeholder="Cebolla" 
        onChange={onSearchValueChange} 
        value={searchValue}
        />
    );
}
