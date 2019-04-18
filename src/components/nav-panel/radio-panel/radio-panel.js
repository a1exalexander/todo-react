import React, { Component } from 'react';

import './radio-panel.css'

export default class RadioPanel extends Component {

  render() {
    return (
      <div class="field has-addons radio-panel">
        <p class="control">
          <button class="button is-info">
            <span class="icon is-small">
              <i class="fas fa-clipboard-list" />
            </span>
            <span>All</span>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <span class="icon is-small has-text-warning">
              <i class="fas fa-exclamation" />
            </span>
            <span>Active</span>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <span class="icon is-small has-text-success">
              <i class="fas fa-check" />
            </span>
            <span>Done</span>
          </button>
        </p>
      </div>
    );
  }
}
