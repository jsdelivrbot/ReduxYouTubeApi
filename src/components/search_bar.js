import React, { Component } from 'react'; 

class SeacrhBar extends Component {
	constructor( props ){
		super( props );
		this.state = {
			term: ''
		}
	}
	
	render(){
		return (
			<div className="search-bar">
				<input 
					value={ this.state.term }
					onChange={ event => this.setState({ term: event.target.value })}
				/>
			</div>
		)
	}
}

export default SeacrhBar;