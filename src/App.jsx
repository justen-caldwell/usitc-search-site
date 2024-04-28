import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Results from './components/Results'
import searchTariffs from './services/searchService'

function App() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  
  const updateSearchState = (event) => {
    console.log('search updating', event.target.value)
    setSearch(event.target.value)
  }

  const executeSearch = (event) => {
    event.preventDefault()
    console.log('executing search keyword', search)

    searchTariffs(search).then(response => {
      console.log('results from usitc search', response)
      setSearchResults(response)
    })

    console.log('resetting search')
    setSearch('')
  }

  return (
    <div>
      <Header />
      <Search value={search} change={updateSearchState} submit={executeSearch} />
      <Results results={searchResults} />
    </div>
  )
}

export default App
