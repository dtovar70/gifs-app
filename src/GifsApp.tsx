import { useState } from "react"
import GifList from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"



export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  }

  const handleSearch = async(query: string) => {
    
    if( query !== ''){

       const queryMinusTrim = query.toLowerCase().trim();

       if( !previousTerms.includes(queryMinusTrim)) {
            setPreviousTerms( (prev) => [queryMinusTrim, ...prev].slice(0,8) );
            await getGifsByQuery(queryMinusTrim);
            
            const gifs = await getGifsByQuery(queryMinusTrim);
            
            setGifs(gifs);
       }
    }
  }

  return (
    <>
        <CustomHeader 
            title="Buscador de Gifs"
            description="Descubre y comparte el Gif perfecto"
        />
        <SearchBar 
            placeholder="Busca lo que quieras"
            onQuery={handleSearch}
        />
        <PreviousSearches 
            searches={previousTerms}
            onLableClick={handleTermClicked}
        />

        <GifList 
            gifs={gifs}
        />
    </>
  )
}

export default GifsApp