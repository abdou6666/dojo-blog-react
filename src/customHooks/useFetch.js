import { useState, useEffect } from 'react';
function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
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
                setIsLoading(false);
                setError(error.message);
           
        
            })
    }, [url]);
 return { data, isLoading, error };
}
export default useFetch;
