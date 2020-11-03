import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component
{
	render()
	{
		const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
		//const {done, important} = this.state;
		let classNames = 'todolistitem';
		if (done) classNames += ' done';
		if (important) classNames += ' important';
		return(
			<span className={classNames}>
				<span className="todolistitemlabel" onClick={onToggleDone}>
					{label}
				</span>
				<button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
					<i className="fa fa-exclamation"/>
				</button>
				<button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
					<i className="fa fa-trash-o"/>
				</button>
			</span>
		);
	}
}