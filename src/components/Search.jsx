const Search = (props) => {
  // props.onSubmit, props.onChange, props.value

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      >
        <button type="submit">Search</button>
      </input>
    </form>
  )
}

export default Search
