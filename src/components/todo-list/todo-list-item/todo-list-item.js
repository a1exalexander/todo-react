import React, { Component } from 'react'

export default class TodoListItem extends Component {

  render() {

    const { label, important = false } = this.props;

    const style = important ? 'has-text-link has-text-weight-semibold' : 'has-text-dark';

    return <td className={style}>{ label }</td>;
  }
}
