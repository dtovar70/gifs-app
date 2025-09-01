import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

/* const gifsCache: Record<string, Gif[]> = {}; */

export const useGifs = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async(term: string) => {

    if( gifsCache.current[term] ) {
        setGifs(gifsCache.current[term]);
        return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  }

  const handleSearch = async(query: string) => {
    
    if( query !== ''){

       const queryMinusTrim = query.toLowerCase().trim();

       if( !previousTerms.includes(queryMinusTrim)) {
            setPreviousTerms( (prev) => [queryMinusTrim, ...prev].slice(0,8) );
            await getGifsByQuery(queryMinusTrim);
            
            const gifs = await getGifsByQuery(queryMinusTrim);
            setGifs(gifs);

            gifsCache.current[queryMinusTrim] = gifs;

            console.log(gifsCache);
       }
    }
  }



  return {
    //Values
    gifs,
    previousTerms

    //Methods / Actions
    ,handleTermClicked,
    handleSearch

  }
}
