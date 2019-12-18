import axios from 'axios';

const baseUrl = 'https://key-resume-gateway.azurewebsites.net/resume';

export const API_LIST = {
  aboutme: baseUrl.concat('/aboutme'),
  career: baseUrl.concat('/career'),
  education: baseUrl.concat('/education'),
  skill: baseUrl.concat('/skill'),
  project: baseUrl.concat('/project'),
};

export async function fetchAllFromServer(api) {
  const response = await axios.get(api);
  return response;
}
