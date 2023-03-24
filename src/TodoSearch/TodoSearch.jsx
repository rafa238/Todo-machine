import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

export const TodoSearch = () => {
    const {searchValue, setSearchValue} = useContext(TodoContext);
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
