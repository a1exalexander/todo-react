import React, { Component } from 'react'

export default class TodoListItem extends Component {

  render() {

    const { label } = this.props;

    return <td className='todo-list__cell todo-list__cell--label'>{ label }</td>;
  }
}
