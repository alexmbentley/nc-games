import axios from 'axios';

export const getReviews = () => {
  return axios.get(`https://alexs-backend-project.herokuapp.com/api/reviews`);
};

export const getCatReviews = (category) => {
  return axios.get(
    `https://alexs-backend-project.herokuapp.com/api/reviews?category=${category}`
  );
};

export const getCategories = () => {
  return axios.get(
    `https://alexs-backend-project.herokuapp.com/api/categories`
  );
};

export const getSingleReview = (id) => {
  return axios.get(
    `https://alexs-backend-project.herokuapp.com/api/reviews/${id}`
  );
};

export const addVote = (id, votesObj) => {
  return axios.patch(
    `https://alexs-backend-project.herokuapp.com/api/reviews/${id}`,
    votesObj
  );
};

export const getComments = (id) => {
  return axios.get(
    `https://alexs-backend-project.herokuapp.com/api/reviews/${id}/comments`
  );
};

export const postComment = (id) => {
  return axios.post(
    `https://alexs-backend-project.herokuapp.com/api/reviews/${id}/comments`
  );
};
