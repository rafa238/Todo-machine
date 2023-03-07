import React from 'react'
import './CreateTodoButto.css'

export const CreateTodoButton = () => {
  
  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui va el mensaje")}
    > 
      + 
    </button>
  )
}
