import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_RAWG_KEY

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  useEffect(() => {
      const getGameDetails = async () => {
        const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        setGameDetails(response.data)
      }
      getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>

        </div>
      </section>
      <section className="details">
        <div className="flex-row space">

        </div>
        <div>
          <h3>

          </h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
