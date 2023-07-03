import { Link } from 'react-router-dom'
import GameCard from './GameCard'

const SearchResultsSection = ({searchResults}) => {

    return(
        <div>
        <h2>Search Results</h2>
        <section className="search-results container-grid">
        {searchResults.map((game) => (
            <div key={game.id}>
            <Link to={`/games/details/${game.id}`}>
            <GameCard name={game.name} image={game.background_image} rating={game.rating}/>
            </Link>
            </div>
        ))}
        </section>
        </div>
    )
}

export default SearchResultsSection