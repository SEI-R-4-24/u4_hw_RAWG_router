const Search = (props) => {

  return (
    <form onSubmit={getSearchResults}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      ></input>
      <br />
      <button type="submit" className="submitBtn">SUBMIT</button>

    </form>
  )
}

export default Search
