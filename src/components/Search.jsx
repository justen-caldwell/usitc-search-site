const Search = ({value, submit, change}) => {
    return(
      <div>
        <h3>Enter Search Argument</h3>
        <form onSubmit={submit}>
          <input value={value} onChange={change}></input>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
}

export default Search
