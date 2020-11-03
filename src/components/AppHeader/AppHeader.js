import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done}) => {
	return(
		<div className="appheader d-flex">
			<h1>Список дел</h1>
			<h2>{todo} more to do, {done} done</h2>
		</div>
	);
};

export default AppHeader;