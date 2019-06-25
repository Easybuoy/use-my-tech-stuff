import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL:
      'https://cors-anywhere.herokuapp.com/https://usemytechstuffbe.herokuapp.com/api'
  });
};
