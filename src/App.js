import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"
import Card from "./Card"

let pokemons = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
]

let pokeProps = rand => {
	let { id, name, type, base_experience } = pokemons[rand]
	const PokeUrl =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

	return (
		<Card
			name={name}
			src={`${PokeUrl}${id}.png`}
			type={type}
			base_experience={base_experience}
		/>
	)
}
function createHand() {
	let firstHand = []
	let TotalXp = 0
	for (let i = 0; i < 5; i++) {
		firstHand[i] = pokeProps(Math.floor(Math.random() * pokemons.length))
		TotalXp = TotalXp + firstHand[i].props.base_experience
	}
	return [firstHand, `Total XP: ${TotalXp}`, TotalXp]
}

const myFirstHand = createHand()
const mySecondHand = createHand()

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>{myFirstHand[1]}</h1>
				<div>{myFirstHand[0]}</div>
				<h1>{mySecondHand[1]}</h1>
				<div>{mySecondHand[0]}</div>
				<div>
					<h1 className="App-winner">
						THE WINNER IS...
						{myFirstHand[2] > mySecondHand[2] ? "DECK 1" : "DECK 2"}{" "}
					</h1>
				</div>
			</div>
		)
	}
}

export default App
