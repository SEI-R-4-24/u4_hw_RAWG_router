import { Link } from 'react-router-dom'

const GenreCard = ({genre}) => {

  return (
    <div className="card">
       <Link to={`/view/games/${genre.id}`}>
        <div className="img-wrapper">
          <img src={genre.image_background} alt="" />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{genre.name}</h3>
        </div>
      </Link>
    </div>
  )
}

export default GenreCard
