import { useNavigate } from 'react-router-dom'
const GenreCard = (props) => {
  let navigate = useNavigate()
  return (
    <div
      className="card"
      onClick={() => navigate(`/view/games/${props.genre.id}`)}
    >
      <div className="img-wrapper">
        <img src={props.genre.image_background} alt={props.genre.name}></img>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.genre.name}</h3>
        <p>{props.genre.gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
