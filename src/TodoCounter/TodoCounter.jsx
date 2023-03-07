import React from 'react'
import './TodoCounter.css';


export const TodoCounter = ({total, completed}) => {
    return (
        <h2 
            className="TodoCounter"
            > Has complentado {completed} de {total} ToDos </h2>
    )
}
