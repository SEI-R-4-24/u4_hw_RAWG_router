const Search = ({onSubmit, onChange, value}) => {

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Games"
        onChange={onChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
