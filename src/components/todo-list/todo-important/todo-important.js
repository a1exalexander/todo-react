import React from 'react';

const TodoImportant = ({ important, done, onImportant }) => {

  const importantButton = `button is-small${important && !done ? ' is-warning' : ''}`;
  const importantIcon = `icon is-small${important && !done ? '' : ' has-text-warning'}`;

  return (
    <button
      onClick={onImportant}
      className={importantButton}
      title='important'>
      <span className={importantIcon}>
        <i className="fas fa-exclamation" />
      </span>
    </button>
  );
	
};

export default TodoImportant;
