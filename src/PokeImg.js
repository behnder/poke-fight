import "./Pokeimg.css"
function Pokeimg(props) {
	return (
		<div className="Pokeimg-poke">
			<img src={props.src} />
		</div>
	)
}

export default Pokeimg
