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

    const elementsMobile = todos.map((item, index) => {
      const { id, label, done, important } = item;

      
      let badgeDefault = '';

      if (important) badgeDefault = 'is-warning';
      if (done) badgeDefault = 'is-success';

      const badge = `tag is-small ${badgeDefault}`;

      let badgeText = 'active';

      if (important) badgeText = 'important';
      if (done) badgeText = 'done';
      
      const defaulButton = 'card-footer-item';
      const defaulIcon = 'icon is-small todo-list__icon';
      const importantButton = `${defaulButton} ${important?'has-background-warning has-text-white':'has-text-grey-darker'}`;
      const doneButton = `${defaulButton} ${done?'has-background-success has-text-white':'has-text-grey-darker'}`;
      const importantIcon = `${defaulIcon} ${important?'has-text-white':'has-text-warning'}`;
      const doneIcon = `${defaulIcon} ${done?'has-text-white':'has-text-success'}`;
      const doneText = done ? 'has-text-white' : 'has-text-grey-darker';
      const importantText = important ? 'has-text-white' : 'has-text-grey-darker';

      return (
        <div className="card todo-list__card">
          <header className="card-header">
            <p className="card-header-title">
              <span className={badge}>{badgeText}</span>
            </p>
            <div className="card-header-icon" aria-label="more options">
              <button
                onClick={() => onDeleted(id)}
                className="button is-small"
                title='delete'>
                <span className="icon is-small">
                  <i className="fas fa-times" />
                </span>
              </button>
            </div>
          </header>
          <div className="card-content">
            <div className="content">
              {label}
            </div>
          </div>
          <footer className="card-footer">
            <a
              href="#"
              className={importantButton}
              onClick={(e) => {
                e.preventDefault();
                onImportant(id)
              }}>
              <span className={importantIcon}>
                <i className="fas fa-exclamation" />
              </span>
              <span className={importantText}>Important</span>
            </a>
            <a
              href="#"
              className={doneButton}
              onClick={(e) => {
                e.preventDefault();
                onDone(id)
              }}>
              <span className={doneIcon}>
                <i className="fas fa-check" />
              </span>
              <span className={doneText}>Done</span>
            </a>
          </footer>
        </div>
      );
    });
  
    return (
      <div>
        <table className="table is-narrow is-fullwidth todo-list is-hidden-touch">
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
          <tbody >{elements}</tbody>
        </table>
        <div className='is-hidden-desktop'>
          {elementsMobile}
        </div>
      </div>
    );
  };
}
