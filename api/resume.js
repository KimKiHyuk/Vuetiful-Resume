import axios from 'axios';

const baseUrl = 'https://key-resume-gateway.azurewebsites.net/resume';

//const baseUrl = 'http://127.0.0.1:8085';
export const API_LIST = {
  aboutme: baseUrl.concat('/aboutme/last'),
  career: baseUrl.concat('/career/last'),
  education: baseUrl.concat('/education/last'),
  skill: baseUrl.concat('/skill/last'),
  project: baseUrl.concat('/project/last'),
  format: baseUrl.concat('/format/last'),
};

export async function fetchAllFromServer(api) {
  const response = await axios.get(api);
  return response;
}
