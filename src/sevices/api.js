import axios from 'axios';
import { Notify } from 'notiflix';

export const getMovies = async options => {
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};
