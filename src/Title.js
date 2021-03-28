import React, { Component } from "react"

import "./Title.css"

class Title extends Component {
	render() {
		return (
			<div className="Title-poke">
				<div className="Title-inner">{this.props.name}</div>
			</div>
		)
	}
}

// function Title() {
// 	return (
// 		<div className="Title-poke">
// 			<div className="Title-inner">{props.name}</div>
// 		</div>
// 	)
// }

export default Title
