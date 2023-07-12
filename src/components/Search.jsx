const Search = (props) => {

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="search"
          value={props.value}
          placeholder="Search Games"
          onChange={props.onChange}
        ></input>
        <br />
        <button type="submit" className="submitBtn" > Submit </button>
      </form>
    </div>
  )
}

export default Search
