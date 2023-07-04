const GenreCard = (props) => {
  return (
    <div className="card">
      <button onClick={props.onClick} />
      <div className="img-wrapper">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>Name: {props.name}</h3>
        <p>Count: {props.gameCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
