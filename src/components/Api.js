import axios from 'axios';

export const getReviews = (param, sortBy, orderBy) => {
  return axios
    .get(`https://alexs-backend-games.cyclic.app/api/reviews/`, {
      params: { category: param.category, sort_by: sortBy, order: orderBy },
    })
    .then((response) => {
      return response;
    });
};

export const getCategories = () => {
  return axios.get(`https://alexs-backend-games.cyclic.app/api/categories`);
};

export const getSingleReview = (id) => {
  return axios.get(`https://alexs-backend-games.cyclic.app/api/reviews/${id}`);
};

export const addVote = (id, votesObj) => {
  return axios.patch(
    `https://alexs-backend-games.cyclic.app/api/reviews/${id}`,
    votesObj
  );
};

export const getComments = (id) => {
  return axios.get(
    `https://alexs-backend-games.cyclic.app/api/reviews/${id}/comments`
  );
};

export const postComment = (id, commentObj) => {
  return axios
    .post(
      `https://alexs-backend-games.cyclic.app/api/reviews/${id}/comments`,
      commentObj
    )
    .then((response) => {
      return response;
    });
};

export const deleteComment = (id) => {
  return axios.delete(
    `https://alexs-backend-games.cyclic.app/api/comments/${id}`
  );
};
