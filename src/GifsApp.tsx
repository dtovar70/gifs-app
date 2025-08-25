import { useState } from "react"
import GifList from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"



export const GifsApp = () => {

    /* Implementar la función handleSearch que debe:
Validar que el query no esté vacío
Convertir el query a minúsculas y eliminar espacios en blanco
Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8. */

  const [previousTerms, setPreviousTerms] = useState(['Dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log(term);
  }

  const handleSearch = (query: string) => {
    
    if( query !== ''){

       const queryMinusTrim = query.toLowerCase().trim();

       if( !previousTerms.includes(queryMinusTrim)) {
            setPreviousTerms( (prev) => [queryMinusTrim, ...prev].slice(0,8) );
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
            gifs={mockGifs}
        />
    </>
  )
}

export default GifsApp