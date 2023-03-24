import { useContext } from "react";
import { AppUI } from "./AppUI/AppUI";
import { TodoProvider, TodoContext } from "./TodoContext";

//const defaultTodos = [];

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
