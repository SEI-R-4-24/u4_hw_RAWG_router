const GenreCard = ({cardId, image, name, gamesCount}) => {

  return (
    <div className="card" key={cardId}>
      <div className="img-wrapper">
        <img src={image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
