import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom React hook to fetch data from a given URL with authorization token from localStorage.
 * Automatically handles loading state, errors, and aborts fetch on component unmount or URL change.
 *
 * @template T - The expected type of the fetched data.
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {T | null} The fetched data of type T or null if loading or on error.
 */
export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response: Response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Token ${token}` : '',
          },
          signal,
        });

        if (!response.ok) throw new Error('Fehler beim laden der Daten');
        const result = await response.json();
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setState({ data: null, loading: false, error: error.message });
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state.data;
};
