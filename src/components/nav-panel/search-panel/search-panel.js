import React from 'react';

const SearchPanel = () => {
	return (
		<div className="field has-addons">
			<p className="control">
				<input className="input" type="text" placeholder="Search..." />
			</p>
			<p className="control">
				<button className="button">Search</button>
			</p>
		</div>
	);
};

export default SearchPanel;
