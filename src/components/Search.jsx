const Search = (props) => {
  console.log(props)
  return (
    <form>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      />
      <button type="submit" onClick={props.onClick}>
        Search
      </button>
    </form>
  )
}

export default Search
