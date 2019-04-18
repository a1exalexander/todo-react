import React from 'react'

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

  const elements = todos.map((item, index) => {

    const { id, ...itemProps } = item;

    return (
      <tr className='is-size-5' key={id}>
        <td>{ index }</td>
        <TodoListItem { ...itemProps } />
        <td>
          <button class="button is-danger">
            <span class="icon is-small">
              <i class="fas fa-trash-alt"></i>
            </span>
            <span>Delete</span>
          </button>
        </td>
        <td>
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-exclamation"></i>
            </span>
            <span>Active</span>
          </button>
        </td>
      </tr>
    );
  });

	return (
    <table className='table is-narrow is-fullwidth todo-list'>
    { elements }
    </table>
	);
};

export default TodoList;
