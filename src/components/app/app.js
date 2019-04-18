import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import NavPanel from '../nav-panel';

import './app.css';

const App = () => {
	const todoData = [
		{ label: 'Drink Coffee', important: false, id: 1 },
		{ label: 'Drink Vodka', important: true, id: 2 },
		{ label: 'Drink Tea', important: false, id: 3 },
	];

	return (
		<div>
			<AppHeader />
			<NavPanel />
			<div className="container">
				<div className="box">
					<TodoList todos={todoData} />
				</div>
			</div>
		</div>
	);
};

export default App;