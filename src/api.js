import axios from 'axios';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'TFgQnIJji3PePe_7-zyCbHAXMtYTr4xsEUpoUQL3Gwg',
      query: searchQuery,
      page: page,
      per_page: 12,
    },
  });
  return response.data;
};