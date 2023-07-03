const Search = (props) => {
  return (
    <form onSubmit={props.getSearchResults}>
      <input
        type="text"
        name="search"
        value={props.inputVal}
        placeholder="Search Games"
        onChange={props.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
