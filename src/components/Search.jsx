const Search = ({handleChange,searchQuery,getSearchResults}) => {

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        value={searchQuery}
        placeholder="Search Games"
      />
      <button onClick={getSearchResults}>Search</button>
    </form>
  )
}

export default Search
