import React, { Component } from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearch }) => {

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onAdd(this.state.label);
  //   this.setState({
  //     label: '',
  //   })
  // }

  return (
    <div className="field is-marginless search-panel">
      <p className="control search-panel__input">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}/>
      </p>
    </div>
  );

};

export default SearchPanel;
