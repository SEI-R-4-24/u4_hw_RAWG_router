const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      ></input>
      <button type="submit">Search Games</button>
    </form>
  )
}

export default Search
