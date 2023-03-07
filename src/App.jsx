import { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoList } from "./TodoList/TodoList";
import { TodoSearch } from "./TodoSearch/TodoSearch";

const defaultTodos = [
  {text: 'Cortar Cebolla', complete: true},
  {text: 'Tomar el curso de Intro a React', complete: false},
  {text: 'Llora pues', complete: false},
  {text: 'Patar a chiwis', complete: true}
]

const useLocalStorage = (itemName, initialState) => {
  const localStorageItem = localStorage.getItem(itemName);

  let parserItems;
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialState));
    parserItems = initialState;
  } else {
    parserItems = JSON.parse(localStorageItem);
  }
  const [items, setItems] = useState(parserItems);
  
  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  }

  return[
    items,
    saveItem
  ]
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", defaultTodos);
  
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


  return (
    <>
      <TodoCounter
        completed = {completedTodos}
        total = {totalTodos}/>
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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

      <CreateTodoButton/>
    </>
  )
}

export default App
