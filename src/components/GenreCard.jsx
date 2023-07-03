const GenreCard = (props) => {
  return (
    <div key={props.id} onClick={props.onClick} className="card">
      <div className="img-wrapper">
        <img src={props.image} alt="Game Image" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
