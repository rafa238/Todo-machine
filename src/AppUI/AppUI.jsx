import React, { useContext } from 'react'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { Modal } from '../Modal'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoList } from '../TodoList/TodoList'
import { TodoSearch } from '../TodoSearch/TodoSearch'

export const AppUI = () => {
    const {loading, searchedTodos, completeTodo, deleteTodo, modal, setModal} = useContext(TodoContext);
    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                { /*error && <p>Error al cargar..</p>*/}
                { loading && <p>Esta cargando..</p>}

                { (!loading && !searchedTodos.length) && <p>Crea tu primer todo..</p>}
                {
                searchedTodos.map( ({text, complete}) => (
                    <TodoItem 
                    key={text} 
                    text={text} 
                    completed={complete} 
                    onComplete = {() => completeTodo(text)}
                    onDelete = {() => deleteTodo(text)}
                    />
                ))
                }
            </TodoList>
            {!!modal && (
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            )}
            <CreateTodoButton modal={modal} setModal={setModal}/>
        </>
    )
}
