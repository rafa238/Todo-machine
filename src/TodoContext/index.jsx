import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const defaultTodos = [
    {text: 'Cortar Cebolla', complete: true},
    {text: 'Tomar el curso de Intro a React', complete: false},
    {text: 'Llora pues', complete: false},
    {text: 'Patar a chiwis', complete: true}
]

const TodoProvider = (props) => {
    const [todos, saveTodos, loading] = useLocalStorage("TODOS_V1", defaultTodos);
    const [modal, setModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const completedTodos = todos.filter(todo => !!todo.complete).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(searchValue.length  < 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const search = searchValue.toLowerCase();
            return todoText.includes(search)
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].complete = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        //setTodos(newTodos);
        saveTodos(newTodos);
    }

    return(
        <TodoContext.Provider value={{
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            modal,
            setModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoProvider
};