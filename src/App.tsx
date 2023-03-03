import React from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import { DataCharacter, getCharacters } from './services/characters.api'
import { Character } from './types'

const App: React.FC = () => {

  // Estado para guardar los datos originales
  const [items, setItems] = React.useState<Character[]>([])
  // Estado para guardar los datos filtrados
  const [filteredItems, setFilteredItems] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getCharacters().then((res: DataCharacter) => {
      const characters = res.data.results.map((character: Character) => character)
      setItems(characters)
      setFilteredItems(characters)
    })
  }, [])

  return (
    <div className="App">
      <div className="content">
        <Header />
        <Search items={items} setFilteredItems={setFilteredItems} />
        <Cards items={filteredItems} />
      </div>
    </div>
  )
}

export default App
