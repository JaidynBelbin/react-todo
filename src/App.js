import './App.css';
import React, {useState} from 'react';
import TodoList from './components/todo-list';

// Needs to be an array of objects

// Fields: 
// -> id: int (for sorting by completed)
// -> description: string
// -> completed: bool
// 

const App = () => {

  // Stateful todo
  const [todoValue, setTodoValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoValue) {
      setTodos([{title: todoValue, completed: false} , ...todos]);
    }
    setTodoValue('');
  }

  const handleChange = event => {
    setTodoValue(event.target.value);
  }

  return (
    <div className="main-container">

        <div className="todo-div">
          
          <TodoList list={todos} />
          
        </div>

      <div className="input-div">
        
          <label>
            Add todo description:
          </label>
          <input 
            type="text"
            value={todoValue}
            name="todo-description"
            onChange={handleChange}/>
         

          <button name="add-todo" onClick={addTodo} type="submit">Add todo</button>
        
      </div>
    </div>
  );
}

export default App;
