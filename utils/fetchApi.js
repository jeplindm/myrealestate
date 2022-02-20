import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a28a70a371msh09fe3368f2aa293p1a04fejsna80b4fdfc9a8",
    },
  });

  return data;
};
