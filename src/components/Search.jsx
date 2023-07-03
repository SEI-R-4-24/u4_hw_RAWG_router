const Search = (props) => {

  return (
    <form>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.searchQuery}
        placeholder="Search Games"
      />
      <button onClick={props.getSearchResults}>Search</button>
    </form>
  )
}

export default Search
