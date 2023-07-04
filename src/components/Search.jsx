const Search = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
      className="search-button"
      type="text"
      name="search"
      value={props.value}
      placeholder="Search"
      onChange={props.onChange}
      ></input>
      <button type='submit'><span className="material-symbols-outlined">
      search
      </span>
      </button>
    </form>
  )
}

export default Search
