import {useState, useEffect} from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error("could not find data"); // catches it at the catch
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name == "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);
    
        return () => abortCont.abort();
        }, [url] // when url changes it will re-run
    );

    return {data, isPending, error, setData};
}

export default useFetch;