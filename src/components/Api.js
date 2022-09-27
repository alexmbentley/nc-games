import axios from 'axios';

const getReviews = () => {
  return axios.get(`https://alexs-backend-project.herokuapp.com/api/reviews`);
};

export default getReviews;
