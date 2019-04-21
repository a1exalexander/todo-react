import React from 'react';

const TodoDone = ({ done, onDone }) => {

		const doneButton = `button is-small${done ? ' is-success' : ''}`;
		const doneIcon = `icon is-small${done ? '' : ' has-text-success'}`;

		return (
      <button
        onClick={onDone}
        className={doneButton}
        title='done'>
				<span className={doneIcon}>
					<i className="fas fa-check" />
				</span>
			</button>
		);
};

export default TodoDone;
