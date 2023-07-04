import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

/* Pseudocode: 

Navbar with links to home and about
Home -> static plus (seaerch component - maybe last?) plus genre component; need to import genre
Genre -> import genres from api, map inside of a grid maybe, with image and title, wrapped in link tags that have the genre id
GenreDetail -> useParam, import all games, findall game genre id = id from useParam, map with images, titles and wrap in links

GameDetail -> useParam, import all games (unless there's a way to import only the set of games from the genre???), find game id = id from useParam, image, title, deets

*/
