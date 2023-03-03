import React from 'react'
import { Character } from '../../types';
import './Search.css'

interface SearchProps {
  items: Character[],
  setFilteredItems: React.Dispatch<React.SetStateAction<Character[]>>
}

const Search: React.FC<SearchProps> = ({ items, setFilteredItems }) => {
  const [filter, setFilter] = React.useState<string>("");

  const onSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (filter === "") {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter((item: Character) => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    setFilteredItems(filtered);
  };

  return (
    <div className="search">
      <input type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Busca un personaje" />
      <button onClick={onSearch}>
        <img src="/assets/search.svg" alt="Search" />
      </button>
    </div>
  )
}

export default Search