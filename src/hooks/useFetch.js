import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPedning] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data from the server')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPedning(false);
                setError(null);
            })
            .catch(err => {
                setIsPedning(false);
                setError(err.massage);
            })
        }, 100);
    }, [url]);

    return { data, isPending, error }
}

export default useFetch

