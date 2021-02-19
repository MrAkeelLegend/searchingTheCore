import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortcntrl  = new AbortController();

    fetch(url, {signal: abortcntrl.signal})
    .then(res => {
      if(!res.ok){
        //console.log(res);
        throw Error('Could not resolve the data for that resource.');
      }
      //console.log(res);
      return res.json();
    })
    .then(data => {
      setData(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      if(err.name === "AbortError"){
        console.log('Fetch aborted')
      }else{
        setIsPending(false);
        setError(err.message);
      }
    });

    return () => abortcntrl.abort();

  }, [url]);

  return { data, isPending, error }
}

export default useFetch;


