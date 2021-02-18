import React, {useState} from 'react';
import '../App.css';

const TodoListItem = (props) => {
  
  // Destructuring the single todo item from props
  const {todo} = props;

  // Putting the completed status into state
  const [completed, setCompleted] = useState(todo.completed);

  return (
    <>
      <div 
        style={{backgroundColor: completed ? ' #77dd77' : '#ffb347'}}
        className="todo-list-item-div">

        <li className="todo-list-item">{todo.title}</li>
        <button onClick={() => {
          if (!completed) {
            setCompleted(true);
          } else {
            setCompleted(false);
          }
        }
        }>Complete</button>

      </div>
    </>
  )
}

export default TodoListItem

