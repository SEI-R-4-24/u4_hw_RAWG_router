import { useNavigate } from 'react-router-dom'

const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="search"
          value={props.searchQuery}
          placeholder="Search Games"
          onChange={props.onChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
