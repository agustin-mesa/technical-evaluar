import React from 'react'
import './App.css'
import Items from './components/Items/Items'

function App() {

  const [items, setItems] = React.useState([])
  const [filter, setFilter] = React.useState<string>("");

  React.useEffect(() => {
    const getFetch = async () => {
      await fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setItems(data.results))
    }

    getFetch()
  }, [])

  const onSearch = (e) => {
    e.preventDefault()
    const newItems = items.filter(item => item.name === filter);

    console.log(newItems)
  }

  return (
    <div className="App">
      <div className="content">
        <header>
          <h1>The Rick and Morty API</h1>
        </header>
        <div className="search">
          <input type="text" onChange={(e) => setFilter(e.target.value)}/>
          <button onClick={onSearch}>
            <img src="/assets/search.svg" alt="Search" />
          </button>
        </div>
        <Items items={items} />
      </div>
    </div>
  )
}

export default App
