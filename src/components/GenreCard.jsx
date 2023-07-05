const GenreCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="Genre" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <h3>Games Count: {props.gamesCount}</h3>
      </div>
    </div>
  )
}

export default GenreCard
