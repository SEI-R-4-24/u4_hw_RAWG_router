const Search = (props) => {
  return (
    <form>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Search
