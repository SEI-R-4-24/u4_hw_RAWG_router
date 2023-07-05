const GameCard = (props) => {
  return (
    <div className="card game-card">
      <button onClick={props.onClick}>{props.name}</button>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
      </div>
    </div>
  )
}

export default GameCard
