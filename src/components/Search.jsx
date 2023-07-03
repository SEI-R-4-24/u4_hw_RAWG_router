const Search = ({handleChange,searchQuery,getSearchResults}) => {

  return (
    <form onSubmit={getSearchResults}>
      <input
        type="text"
        onChange={handleChange}
        value={searchQuery}
        placeholder="Search Games"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
