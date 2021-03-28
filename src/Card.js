import React, { Component } from "react"

import "./Card.css"
import Pokeimg from "./PokeImg"
import Stats from "./Stats"
import Title from "./Title"

// let pokemons = [
// 	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
// 	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
// 	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
// 	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
// 	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
// 	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
// 	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
// 	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
// ]
// let pokeProps = pokemons[Math.floor(Math.random() * pokemons.length)]
// const { id, name, type, base_experience } = pokeProps
// const PokeUrl =
// 	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

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

// function Card() {
//   PokeSrc = `${PokeUrl}${id}.png`
// 	return (
// 		<div className="Card-poke">
// 			<Title
//        id={id}
//        name={name}
//        type={type}
//        base_experience={base_experience}

//       />
// 			<Pokeimg src={PokeSrc} />
// 			<Stats />
// 		</div>
// 	)
// }

export default Card
