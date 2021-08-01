import axios from 'axios';

export default() => {
  return axios.create({
    baseURL: `http://localhost:9000/api` // the url of our server
  })
}