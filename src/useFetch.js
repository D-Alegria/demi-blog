import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setDate] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't connect to server");
                }
                return res.json();
            })
            .then(data => {
                setDate(data);
                setIsPending(false);
                setError(null)
            })
            .catch(reason => {
                if (reason.name === 'AbortError') {
                    console.log("Fetch aborted");
                } else {
                    setError(reason.message);
                    setIsPending(false);
                }
            });
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;