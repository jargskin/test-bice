import axios from 'axios';

export default function GetInsurance(id) {
  return axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${id}`)
    .then((resp) => resp)
    .catch((error) => error);
}
