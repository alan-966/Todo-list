import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component
{
	state = {
		term: ''
	};

	onChangeListener = (e) =>
	{
		const term = e.target.value;
		this.setState({ term });
		this.props.onEnableFilter(term);
	};

	render()
	{
		const searchText = 'type to search';
		return(
			<input className="search-input" placeholder={searchText} onChange={this.onChangeListener}
				value={this.state.term}/>
		);
	}
}