import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearch }) => {

  return (
    <div className="is-marginless search-panel">
      <p className="control search-panel__input">
        <input
          className="input is-small"
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}/>
      </p>
    </div>
  );

};

export default SearchPanel;
