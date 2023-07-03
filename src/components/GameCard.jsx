const GameCard = ({name, image, rating}) => {
  
  return (
    <div className="card game-card">
      <div className="img-wrapper">
        <img src={image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{rating}</p>
      </div>
    </div>
  )
}

export default GameCard
