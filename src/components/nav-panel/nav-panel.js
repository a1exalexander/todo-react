import React from 'react'

import SearchPanel from './search-panel';
import PostCount from './post-count';
import RadioPanel from './radio-panel';

import './nav-panel.css';

const NavPanel = () => {
	return (
		<nav className="is-flex-mobile container level nav-panel">
			<div className="level-left">
				<div className="level-item">
          <SearchPanel />
				</div>
				<div className="level-item">
					<PostCount />
				</div>
			</div>
			<div className="level-right nav-panel__row">
				<RadioPanel />
        <button class="button is-primary">
					<span class="icon is-small">
						<i class="fas fas fa-plus" />
					</span>
					<span>New</span>
				</button>
			</div>
		</nav>
	);
};

export default NavPanel;