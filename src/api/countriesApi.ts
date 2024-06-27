import axios from 'axios';
import { Country } from '../types/Country';

const COUNTRIES_API_HOST = 'https://restcountries.com/v3.1/all';

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get(COUNTRIES_API_HOST);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
