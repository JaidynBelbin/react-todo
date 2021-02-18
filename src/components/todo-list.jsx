import React from 'react';
import TodoListItem from './todo-list-item';
import '../App.css';

const TodoList = ({list}) => {
  
  return (
    <div className="todo-list-div">
      {(list || []).map((item, index) => {
          return (
            <TodoListItem key={index} todo={item}/>
          )
        })}
    </div>
        
  )
}

export default TodoList
