import React from 'react';

const TodoDelete = ({ onDeleted }) => {

	return (
    <button
      onClick={onDeleted}
      className="button is-small is-danger"
      title='delete'>
			<span className="icon is-small">
				<i className="fas fa-times" />
			</span>
		</button>
	);
};

export default TodoDelete;
