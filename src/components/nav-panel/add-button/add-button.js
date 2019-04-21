import React from 'react';

import './add-button.css';

const AddButton = ({ label, type, onAdd, loading }) => {

  const load = loading? 'is-loading': '';
  const classStyle = `button add-button ${type} ${load}`;

	return (
		<button
			onClick={onAdd}
			className={classStyle}
			title="Add new Todo"
		>
			<span className="icon is-small">
				<i className="fas fas fa-plus" />
			</span>
			<span className='add-button__text'>{label}</span>
		</button>
	);
};

export default AddButton;
