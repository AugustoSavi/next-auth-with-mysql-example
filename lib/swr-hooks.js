import useSWR from 'swr';
import axios from 'axios';

async function fetcher(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}

export function useEntries() {
  const { data, error } = useSWR('api/get-entries', fetcher);
  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useEntry(id) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher);
}
