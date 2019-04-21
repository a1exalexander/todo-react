import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import NavPanel from '../nav-panel';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Drink Vodka'),
      this.createTodoItem('Drink Water'),
    ],
    isLoading: false,
    filter: 'all',
    search: '',
  };

  createRandomTodo = () => {
    this.setState({
      isLoading: true,
    });
    const id = Math.floor(Math.random() * (100 - 1)) + 1;
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
        });
        this.addItem(json.title);
      });
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.state.todoData.findIndex(el => id === el.id);
      const newArr = [ ...todoData ];
      newArr.splice(idx, 1);
      return {
        todoData: newArr,
      };
    });
  };

  addItem = (label = 'Drink coffee') => {
    this.setState(({ todoData }) => {
      const newArr = [ ...todoData, this.createTodoItem(label) ];
      return {
        todoData: newArr,
      };
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => id === el.id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = [ ...arr ];
    newArr.splice(idx, 1, newItem);
    return newArr;
  }

  onToggleDone = (id) => {
    
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    })
  }

  onFilter = (type) => {
    this.setState({
      filter: type,
    });
  }

  onFilteredTodos = () => {
    const { filter, search, todoData } = this.state;

    if (search) {
      return todoData.filter((item) => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
    } else {
      switch(filter) {
        case 'important':
          return todoData.filter(el => el.important);
        case 'done':
          return todoData.filter(el => el.done);
        case 'active':
          return todoData.filter(el => !el.done);
        default:
          return todoData;
      }
    }
  }

  onSearch = (chars) => {
    this.setState({
      search: chars,
    })
  }

  render() {

    const countTodos = this.state.todoData
      .filter(el => !el.done).length;
    const countImportant = this.state.todoData
      .filter(el => el.important).length;
    const countDone = this.state.todoData
      .filter(el => el.done).length;
    const countActive = this.state.todoData
      .filter(el => !el.done).length;

    const filterTodos = this.onFilteredTodos();

    const count = { countTodos, countImportant, countDone, countActive };

    const { isLoading, filter } = this.state;
  
    return (
      <div>
        <AppHeader />
        <NavPanel
          count={count}
          isLoading={isLoading}
          onRandomAdd={this.createRandomTodo}
          onAdd={this.addItem}
          onFilter={this.onFilter}
          filter={filter}
          onSearch={this.onSearch}/>
        <div className="container root-box">
          <div className="box root-box__box">
            <TodoList
              todos={filterTodos}
              onDeleted={this.deleteItem}
              onDone={this.onToggleDone}
              onImportant={this.onToggleImportant}/>
          </div>
        </div>
      </div>
    );
  };
}
