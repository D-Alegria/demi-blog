import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setDate] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
                console.error(reason);
                setError(reason.message);
                setIsPending(false);
            });
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;