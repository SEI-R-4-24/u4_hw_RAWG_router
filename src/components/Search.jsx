import {useState, useEffect} from 'react'

const Search = ({searchQuery, setSearchQuery}) => {

  return (
    <form>
      <input
        type="text"
        name="search"
        value={searchQuery}
        placeholder="Search Games"
        onChange={(event) => setSearchQuery(event.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
