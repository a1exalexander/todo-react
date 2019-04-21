import React, { Component } from 'react';

import TodoListItem from './todo-list-item';
import TodoDone from './todo-done';
import TodoDelete from './todo-delete';
import TodoImportant from './todo-important';
import './todo-list.css';

export default class TodoList extends Component {

  render() {

    const { todos, onDeleted, onImportant, onDone } = this.props;

    const elements = todos.map((item, index) => {
      const { id, label, done, important } = item;

      
      let badgeDefault = '';

      if (important) badgeDefault = 'is-warning';
      if (done) badgeDefault = 'is-success';

      const badge = `tag is-small ${badgeDefault}`;

      let badgeText = 'active';

      if (important) badgeText = 'important';
      if (done) badgeText = 'done';

      return (
        <tr className="is-size-5" key={id}>
          <td>{index}</td>
          <td>
            <span className={badge}>{badgeText}</span>
          </td>
          <TodoListItem label={label}/>
          <td>
            <TodoDelete onDeleted={() => onDeleted(id)}/>
          </td>
          <td>
            <TodoImportant
              onImportant={() => onImportant(id)}
              important={important}/>
          </td>
          <td className="todo-list__cell">
            <TodoDone
              onDone={() => onDone(id)}
              done={done}/>
          </td>
        </tr>
      );
    });
  
    return (
      <table className="table is-narrow is-fullwidth todo-list">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Todo</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    );
  };
}
