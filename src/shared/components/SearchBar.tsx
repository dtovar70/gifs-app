import { useEffect, useState, type KeyboardEvent } from "react";

interface Props{
  placeholder?: string;

  onQuery: (query: string) => void;
}

const SearchBar = ({placeholder = 'Buscar', onQuery} : Props) => {

  const [query, setQuery] = useState('');

  useEffect(() =>{
    const timeOutId = setTimeout(() => { 
      onQuery(query);
    }, 700);
  
    return () => {
      clearTimeout(timeOutId);
    };

  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if( event.key === 'Enter'){
            handleSearch();
        }
  }

  return (
    <div className="search-container">
        <input 
          type="text" 
          placeholder={placeholder} 
          value={query}
          onChange={ (e) => setQuery(e.target.value) }
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
        >Buscar</button>
    </div>
  )
}

export default SearchBar