import React, { Component } from 'react'

import SearchPanel from './search-panel';
import PostCount from './post-count';
import AddButton from './add-button';
import RadioPanel from './radio-panel';

import './nav-panel.css';

export default class NavPanel extends Component {
  
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: '',
    })
  }

  render() {

    const {
      count,
      onRandomAdd,
      isLoading,
      onFilter,
      filter,
      onSearch,
    } = this.props;

    const { label } = this.state;

    return (
      <div className="container nav-panel">
        <nav className="nav-panel__nav">
          <div className="nav-panel__inner">
            <SearchPanel onSearch={onSearch}/>
            <PostCount {...count}/>
          </div>
          <div className="nav-panel__row">
            <RadioPanel onFilter={onFilter} filter={filter}/>
          </div>
        </nav>
        <div className='nav-panel__add-box'>
          <form
            className="field has-addons nav-panel__form"
            name='addForm'
            onSubmit={this.onSubmit}>
            <p className="control search-panel__input">
              <input
                className="input is-small"
                type="text" placeholder="Todo..."
                onChange={this.onLabelChange}
                value={label}/>
            </p>
            <p className="control">
              <button
                className="button is-small is-primary">
                <span className="icon is-small">
                  <i className="fas fas fa-plus" />
                </span>
                <span>Add Todo</span>
              </button>
            </p>
          </form>
          <AddButton
            label='New random todo (by Fetch)'
            loading={isLoading}
            onAdd={onRandomAdd}/>
        </div>
      </div>
    );
  };
}