import axios from 'axios';

const API_URL = 'https://final-project-backend-e55mlgzkc-lansilvester.vercel.app/v1/destination/posts';

const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const data = getData();