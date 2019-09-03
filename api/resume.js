import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8081';

export const API_LIST = {
  aboutme: baseUrl.concat('/aboutme'),
  career: baseUrl.concat('/career'),
  education: baseUrl.concat('/education'),
  skill: baseUrl.concat('/skill'),
  project: baseUrl.concat('/project'),
  format: baseUrl.concat('/format'),
};

export async function fetchAllFromServer(api) {
  const response = await axios.get(api);
  console.log(response);
  return response;
}
