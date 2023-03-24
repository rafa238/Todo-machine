import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


export const TodoCounter = () => {
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
        <h2 
            className="TodoCounter"
            > Has complentado {completedTodos} de {totalTodos} ToDos </h2>
    )
}
