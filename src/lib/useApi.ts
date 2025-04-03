import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * The `useFetch` function is a custom hook that fetches data from a specified URL and
 * manages the loading state, data, and error handling.
 * @param {string} url - The `url` parameter in the `useFetch` function is a string representing the
 * URL from which data will be fetched.
 * @returns The `useFetch` function returns the current state of the data fetching operation, which
 * includes the data fetched from the specified URL, loading status, and any potential errors that
 * occurred during the fetch process.
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
        const response: Response = await fetch(url, { signal });
        if (!response.ok) throw new Error("Fehler beim laden der Daten");
        const result = await response.json();
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setState({ data: null, loading: false, error: error.message });
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
};

/**
 * The `usePost` function is a custom hook that handles POST requests with loading and
 * error state management.
 * @param {string} url - The `url` parameter in the `usePost` function is a string that represents the
 * endpoint where the POST request will be sent. It is the URL to which the data will be posted.
 * @returns The `usePost` function returns an object with three properties:
 * 1. `postData`: an asynchronous function that sends a POST request to the specified URL with the
 * provided body data and returns a Promise that resolves to the response data or void.
 * 2. `loading`: a boolean state variable that indicates whether the POST request is currently loading.
 * 3. `error`: a string or null state variable that holds
 */
export const usePost = <T, R>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const postData = async (body: T): Promise<R | void> => {
    try {
      const response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok)
        throw new Error(`Fehler: ${response.status} ${response.statusText}`);
      return await response.json();
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { postData, loading, error };
};

/**
 * The useUpdate function is a custom hook for making PUT or PATCH requests to update
 * data with loading and error handling capabilities.
 * @param {string} url - The `url` parameter in the `useUpdate` hook is a string that represents the
 * endpoint URL where the update request will be sent. This URL should point to the specific resource
 * that needs to be updated on the server.
 * @param {"PUT" | "PATCH"} method - The `method` parameter in the `useUpdate` hook specifies whether
 * the HTTP request should be a PUT or PATCH request.
 * @returns The `useUpdate` hook returns an object with three properties:
 * 1. `postData`: an asynchronous function that sends a PUT or PATCH request to the specified URL with the
 * provided body data and returns a Promise that resolves to the response data or void.
 * 2. `loading`: a boolean state variable that indicates whether the POST request is currently loading.
 * 3. `error`: a string or null state variable that holds
 */
export const useUpdate = <T, R>(url: string, method: "PUT" | "PATCH") => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateData = async (body: T): Promise<R | void> => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok)
        throw new Error(`Fehler: ${response.status} ${response.statusText}`);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { updateData, loading, error };
};

/**
 * The useDelete function is a custom hook that handles sending a DELETE request to a
 * specified URL and manages loading and error states.
 * @param {string} url - The `url` parameter is a string that represents
 * the URL endpoint to which the DELETE request will be sent. This URL specifies the location of the
 * resource that needs to be deleted when the `deleteData` function is called.
 * @returns The `useDelete` function returns an object with three properties:
 * 1. `deleteData`: A function that sends a DELETE request to the specified URL.
 * 2. `loading`: A boolean state variable that indicates whether the request is currently loading.
 * 3. `error`: A string or null value that holds any error message encountered during the request
 * process.
 */
export const useDelete = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const deleteData = async (): Promise<void> => {
    try {
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok)
        throw new Error(`Fehler: ${response.status} ${response.statusText}`);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { deleteData, loading, error };
};
