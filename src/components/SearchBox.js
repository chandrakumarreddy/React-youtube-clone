import React, { Component } from "react";
export default class SearchBox extends Component {
	state = {
		searchItem: ""
	};

	handleChange = e => this.updateSearch(e.target.value);
	updateSearch = term => {
		this.setState({ searchItem: term });
		this.props.onSearchChange(term);
	};

	render() {
		return (
			<input
				type="text"
				value={this.state.searchItem}
				onChange={this.handleChange}
				placeholder="Search here"
			/>
		);
	}
}
