const GenreCard = (props) => {
  // props.image, props.name, props.gamesCount, props.onClick

  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>Game Count: {props.gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
