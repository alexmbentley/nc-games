import axios from 'axios';

const getReviews = () => {
  return axios
    .get(`https://alexs-backend-project.herokuapp.com/api/reviews`)
    .then((response) => {
      console.log(response, 'axios response');
    });
};

export default getReviews;

// return fetch(`https://alexs-backend-project.herokuapp.com/api/reviews`).then(
//     (data) => {
//       data.json();
//       console.log(data);
//     }
//   );
