import React, { Component } from "react"
import "./Pokeimg.css"

class Pokeimg extends Component {
	render() {
		console.log("props of POKEIMG:  ", this.props)
		return (
			<div className="Pokeimg-poke">
				<img src={this.props.src} />
			</div>
		)
	}
}

export default Pokeimg
