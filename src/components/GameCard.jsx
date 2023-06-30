import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const GameCard = () => {




  return game ? (
    <div className="card game-card" onClick={games.onClick}>
      <div className="img-wrapper">
        <img src={games.image} alt={games.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{games.name}</h3>
      </div>
      <Link to="/viewgames">
        <button className="backButton">BACK</button>
      </Link>
    </div>
  ) : null
}

export default GameCard
