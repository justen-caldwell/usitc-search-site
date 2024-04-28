import Entry from "./Entry"

const Results = ({ results }) => {
  if (results.length === 0) {
    console.log('no results sent to results component')
    return(
      <div>
        <h1>Results</h1>
        <p>No results found...</p>
      </div>
    )
  }

  console.log(`rendering ${results.length} results`)
  return (
    <div>
      <h1>Results</h1>
      {results.map(result => 
        <li key={result.htsno}>
          <Entry entry={result} />
        </li>
      )}
    </div>
  )
}

export default Results
