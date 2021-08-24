import { useState, useEffect } from 'react';
function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            const AbortCont = new AbortController();
        fetch(url, {signal : AbortCont.signal})
            .then((resp) => {
                if (!resp.ok) {
                    throw Error("Couldn't fetch data");
                }
            
                return resp.json();
            })
            .then( data => {
                setIsLoading(false);
                setData(data);
                setError(null);
            }).catch(error => {
                if (error.name === "AbortError")
                {
                    console.log('fetch aborted');
                }
                else {
                setIsLoading(false);
                setError(error.message);
                }
    
                
        
            })
        return () => AbortCont.abort();
    }, [url]);
   
 return { data, isLoading, error };
}
export default useFetch;
