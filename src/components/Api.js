import axios from 'axios';

export const getReviews = () => {
  return axios.get(`https://alexs-backend-project.herokuapp.com/api/reviews`);
};

export const getCatReviews = (category) => {
  return axios.get(
    `https://alexs-backend-project.herokuapp.com/api/reviews?category=${category}`
  );
};
