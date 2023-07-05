const GenreCard = (props) => {
  return (
    <section className="container-grid">
      {props.genres.map((genre) => (
        <div className="card" key={genre.id}>
          <div className="img-wrapper">
            <img src={genre.image_background} alt="Genre" />
            <div className="info-wrapper flex-row">
              <h3>{genre.name}</h3>
              <p>{genre.game_count}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default GenreCard
