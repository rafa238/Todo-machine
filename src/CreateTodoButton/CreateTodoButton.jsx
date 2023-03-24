import React from 'react'
import './CreateTodoButto.css'

export const CreateTodoButton = ({modal, setModal}) => {

  const onClickButton = (msg) => {
    setModal(prevState => !prevState);
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
