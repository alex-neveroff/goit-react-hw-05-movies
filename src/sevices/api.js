import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '65175319ff5fdf769ef44bf4c6a21d27';
const BASE_URL = 'https://api.themoviedb.org/3';

const getMovies = async (pathname, page = 1, query = '') => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${pathname}?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export default getMovies;
