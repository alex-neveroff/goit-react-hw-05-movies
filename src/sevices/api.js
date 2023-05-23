import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '65175319ff5fdf769ef44bf4c6a21d27';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    console.log(data);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};
