import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css'

const TodoList = ({data, onDeleted, onToggleImportant, onToggleDone}) =>
{
	const elements = data.map((item) => {
		return(
			<li key={item.id} className="list-group-item">
				<TodoListItem label={item.label} important={item.important} done={item.done}
					onDeleted={() => onDeleted(item.id)}
					onToggleImportant={() => onToggleImportant(item.id)}
					onToggleDone={() => onToggleDone(item.id)}
				/>
			</li>
		);
	});

	return(
		<ul className="list-group todolist">
			{elements}
		</ul>
	);
};

export default TodoList;