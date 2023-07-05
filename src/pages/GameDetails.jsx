import { useEffect, useState } from "react"

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `${BASE_URL}/api/games/${gameId}?key=${import.meta.env.VITE_RAWG_KEY}`
      )
      setGameDetails(response.data.results)
    }
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div></div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
