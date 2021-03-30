import React, { Component } from "react"

import "./Card.css"
import Pokeimg from "./PokeImg"
import Stats from "./Stats"
import Title from "./Title"

class Card extends Component {
	render() {
		// let PokeSrc = `${PokeUrl}${id}.png`
		return (
			<div className="Card-poke">
				<Title name={this.props.name} />
				<Pokeimg src={this.props.src} />
				<Stats
					type={this.props.type}
					base_experience={this.props.base_experience}
				/>
			</div>
		)
	}
}

export default Card
