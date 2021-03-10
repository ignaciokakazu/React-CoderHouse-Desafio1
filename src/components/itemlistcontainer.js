import React from 'react';

class ItemListContainer extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
			<div>
			<div className="row">
				<h3>{this.props.greeting}</h3>
			</div>
			<ItemList/>
			</div>
		)
	};
}

class ItemList extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return(
			<div className="row">
			    <div className="col s4 m3">
			      <div className="card">
			        <div className="card-image">
			          <img src="#"/>
			        </div>
			        <div className="card-content">
			          <h6>Item</h6>
			          <p>Descripción</p>
			        </div>
			        <div className="card-action">
			          <p>Contador</p>
			        </div>
			      </div>
			    </div>
			  </div>	
		)
	};

}

export default ItemListContainer;