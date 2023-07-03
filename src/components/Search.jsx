const Search = (props) => {
// console.log(props)
  return (
    <div className="">
      <form onSubmit={props.onSubmit}>
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
    </div>
  )
}

export default Search
