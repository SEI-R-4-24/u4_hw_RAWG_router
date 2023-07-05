const GameCard = (props) => {

  const rating = props.rating.toFixed(1)
  
  return (
    <div className="card game-card">
      <div className="img-wrapper">
        <img src={props.image} alt="Game" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <h1>{rating}</h1>
      </div>
    </div>
  )
}

export default GameCard
