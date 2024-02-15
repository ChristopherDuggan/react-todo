import { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'

function App() {

  const [showTodos, setShowTodos] = useState(true)

  const [todos, setTodos] = useState([
    'Have Fun',
    'Learn React',
    'Learn the MERN-Stack'
  ])

  // let x = 'buy bananas'


function handleAddTodo(todo) {
  // Create a new array that includes the new todo
  const newTodos = [...todos, todo];
  // Update state and re-render
  setTodos(newTodos);
}

  return (
    <div className="App">
      <h1>React To-Do</h1>

      <button onClick={() => setShowTodos(!showTodos)}>Toggle Todo List</button>
      {/* <button onClick={() => handleAddTodo(x)}> click me</button> */}

      {showTodos && <ToDoList todos={todos} />}
      {/* {todos.length > 0 ? <ToDoList todos={todos} /> : <p>there are no todos</p>} */}
    </div>
  );
}

export default App;









