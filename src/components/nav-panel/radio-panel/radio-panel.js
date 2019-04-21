import React, { Component } from 'react';

import './radio-panel.css'

export default class RadioPanel extends Component {

  render() {

    const {
      filter,
      onFilter,
    } = this.props;

    const defaultButton = 'button is-small';
    const defaultIcon = 'icon is-small';

    const allStyle = `${defaultButton} ${filter === 'all'?'is-info':''}`;
    const importantStyle = `${defaultButton} ${filter === 'important'?'is-warning':''}`;
    const doneStyle = `${defaultButton} ${filter === 'done'?'is-success':''}`;

    const iconAll = `${defaultIcon} ${filter === 'all'?'':'has-text-info'}`;
    const iconImportant = `${defaultIcon} ${filter === 'important'?'':'has-text-warning'}`;
    const iconDone = `${defaultIcon} ${filter === 'done'?'':'has-text-success'}`;

    return (
      <div className="field has-addons radio-panel">
        <p className="control">
          <button
            className={allStyle}
            onClick={() => onFilter('all')}>
            <span className={iconAll}>
              <i className="fas fa-clipboard-list" />
            </span>
            <span>All</span>
          </button>
        </p>
        <p className="control">
          <button
            className={importantStyle}
            onClick={() => onFilter('important')}>
            <span className={iconImportant}>
              <i className="fas fa-exclamation" />
            </span>
            <span>Active</span>
          </button>
        </p>
        <p className="control">
          <button
            className={doneStyle}
            onClick={() => onFilter('done')}>
            <span className={iconDone}>
              <i className="fas fa-check" />
            </span>
            <span>Done</span>
          </button>
        </p>
      </div>
    );
  }
}
