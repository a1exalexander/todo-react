import React from 'react';

import './post-count.css';

const PostCount = ({ countTodos, countDone, countImportant, countActive }) => {
	return (
    <div className='post-count'>
      <div className="tags has-addons post-count__label">
        <span className="tag is-marginless">Todos</span>
        <span className="tag is-marginless is-info">{ countTodos }</span>
      </div>
      <div className="tags has-addons post-count__label">
        <span className="tag is-marginless">Active</span>
        <span className="tag is-marginless is-danger">{ countActive }</span>
      </div>
      <div className="tags has-addons post-count__label">
        <span className="tag is-marginless">Important</span>
        <span className="tag is-marginless is-warning">{ countImportant }</span>
      </div>
      <div className="tags has-addons post-count__label">
        <span className="tag is-marginless">Done</span>
        <span className="tag is-marginless is-success">{ countDone }</span>
      </div>
    </div>
	);
};

export default PostCount;
