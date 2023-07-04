const Search = (props) => {
  return (
    <form>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={(e) => props.handleChange(e)}
      ></input>
      <button type="submit" onClick={(e) => props.search(e)}>
        Search
      </button>
    </form>
  )
}

export default Search
