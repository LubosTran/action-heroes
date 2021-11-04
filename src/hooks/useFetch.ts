import { useState, useEffect } from "react";
import { Hero } from "../components/Content/Content";

const useFetch = (url: string, options: {}) => {
  const [response, setResponse] = useState([] as Hero[]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const goFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e: any) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    goFetch();
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { response, error, loading };
};
export default useFetch;
