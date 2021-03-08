import React from 'react';
import "./search.css";

class Search extends React.Component {
	render() {
		return (
			<div className="search">
				<input type="text"/>
				<button className="btn">Buscar</button>
			</div>
		)
	};	
}

export default Search;