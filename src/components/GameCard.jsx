const GameCard = (props) => {
  return (
    <section className="search-results container-grid">
      {props.searchResults.map((game) => (
        <div className="card game-card" key={game.id}>
          <div className="img-wrapper">
            <img src={game.background_image} alt="Game" />
            <h3 onClick={() => props.toggleSearch(game.id)}>{game.name} </h3>

            <h1>{game.rating}</h1>
          </div>
        </div>
      ))}
    </section>
  )
}

export default GameCard
