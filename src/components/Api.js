import axios from 'axios';

export const getReviews = (param, sortBy, orderBy) => {
  return axios
    .get(`https://alexs-backend-project.herokuapp.com/api/reviews/`, {
      params: { category: param.category, sort_by: sortBy, order: orderBy },
    })
    .then((response) => {
      return response;
    });
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

export const postComment = (id, commentObj) => {
  return axios
    .post(
      `https://alexs-backend-project.herokuapp.com/api/reviews/${id}/comments`,
      commentObj
    )
    .then((response) => {
      return response;
    });
};

export const deleteComment = (id) => {
  return axios.delete(
    `https://alexs-backend-project.herokuapp.com/api/comments/${id}`
  );
};
