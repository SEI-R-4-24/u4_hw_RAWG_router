const GenreCard = () => {
  return (
    <div className="card" onClick={props.onClick}>
      Genres
      <div className="img-wrapper">
        <img src={props.image} alt="Insert Genre" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
