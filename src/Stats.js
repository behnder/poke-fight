import React, { Component } from "react"

import "./Stats.css"

class Stats extends Component {
	render() {
		return (
			<div>
				<div>{this.props.type}</div>
				<div>{this.props.base_experience}</div>
			</div>
		)
	}
}

// function Stats() {
// 	return <div className="Stats-poke">
//     pokemon stats: 33
//     </div>
// }

export default Stats
