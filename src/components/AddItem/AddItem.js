import React from 'react';
import './AddItem.css';

export default class AddItem extends React.Component
{
	state = { label: ''};

	onLabelChange = (e) =>
	{
		this.setState(
		{
			label: e.target.value
		});
		//console.log(e.target.value);
	};

	onSubmit = (e) =>
	{
		e.preventDefault();
		this.props.onAdded(this.state.label);
		this.setState({ label: ''});
	};

	render()
	{
		return(
			<form className="additem d-flex" onSubmit={this.onSubmit}>
				<input type="text" className="form-control"
					onChange={this.onLabelChange} placeholder="Что добавить"
					value={this.state.label}/>
				<button className="btn btn-outline-secondary">
					Add Item
				</button>
			</form>
		);
	};
}