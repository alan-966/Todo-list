import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItem from '../AddItem';
import './App.css';

export default class App extends React.Component
{
	maxId = 100;

	createTodoItem = (label) =>
	{
		return {
			label: label,
			important: false,
			done: false,
			id: this.maxId++,
		};
	};

	state = {
		todoData: [
			this.createTodoItem('Дело №1'),
			this.createTodoItem('Дело №2'),
			this.createTodoItem('Дело №3'),
			this.createTodoItem('Дело №4'),
			this.createTodoItem('Дело №5'),
		],
		term: '',
		filter: 'all'//active, all, done
	};

	deleteItem = (id) =>
	{
		this.setState((state) =>
		{
			const idx = state.todoData.findIndex((el) => el.id === id);
			//state.todoData.splice(idx, 1);
			const before = state.todoData.slice(0, idx);
			const after = state.todoData.slice(idx + 1);
			const newArray = [...before, ...after];
			return {
				todoData: newArray
			};
		});
	};

	addItem = (label) =>
	{
		const newItem = this.createTodoItem(label);
		this.setState((state) =>
		{
			const newArray = [
				...state.todoData,
				newItem
			];
			return {
				todoData: newArray
			};
		});
	};

	toggleProperty(arr, id, propName)
	{
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		const before = arr.slice(0, idx);
		const after = arr.slice(idx + 1);
		const newArray = [...before, newItem, ...after];
		return newArray;
	};

	onToggleImportant = (id) =>
	{
		this.setState((state) =>
		{
			return {
				todoData: this.toggleProperty(state.todoData, id, 'important')
			};
		});
		//console.log('important', id);
	};

	onToggleDone = (id) =>
	{
		this.setState((state) =>
		{
			return {
				todoData: this.toggleProperty(state.todoData, id, 'done')
			};
		});
		//console.log('done', id);
	};

	onEnableFilter = (term) =>
	{
		this.setState({ term });
		//console.log(e.target.value);
	};

	onFilterChange = (filter) =>
	{
		this.setState({ filter });
		//console.log(e.target.value);
	};

	search(items, term)
	{
		if (term.length === 0) return items;
		return items.filter((el) => el.label.toLowerCase().includes(term.toLowerCase()));
	};

	filter(items, filter)
	{
		switch(filter)
		{
			case 'all':
				return items;
			case 'active':
				return items.filter((el) => !el.done);
			case 'done':
				return items.filter((el) => el.done);
			default:
				return items;
		}
	};

	render()
	{
		const {todoData, term, filter} = this.state;
		const visibleItems = this.filter(this.search(todoData, term), filter);

		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;
		return(
			<div className="todo-app">
				<AppHeader todo={todoCount} done={doneCount}/>
				<div className="top-panel d-flex">
					<SearchPanel onEnableFilter={this.onEnableFilter}/>
					<ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
				</div>
				<TodoList data={visibleItems}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<AddItem onAdded={this.addItem}/>
			</div>
		);
	};
}