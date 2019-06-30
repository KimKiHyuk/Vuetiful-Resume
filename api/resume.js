import axios from 'axios';

export const API_LIST = {
  aboutme: 'http://keykim.iptime.org:8081/aboutme',
  career: 'http://keykim.iptime.org:8081/career',
  education: 'http://keykim.iptime.org:8081/education',
  skill: 'http://keykim.iptime.org:8081/skill',
  project: 'http://keykim.iptime.org:8081/project',
};
// eslint-disable-next-line no-unused-vars
const mockAboutme = {
  information: {
    name: 'Key',
    job: 'software developer',
    greet: 'Hello there11!',
    nation: '대한민국 서울특별시',
    introduce:
      'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
};

// eslint-disable-next-line no-unused-vars
const mockCareer = {
  information: [
    {
      color: 'cyan',
      year: '1960',
      month: '1',
      company: 'google inc',
      experience: 'honey sucker',
    },
    {
      color: 'green',
      year: '1970',
      month: '2',
      company: 'microsoft',
      experience: '아무것도 안함',
    },
    {
      color: 'pink',
      year: '1980',
      month: '3',
      company: 'naver',
      experience: '월급 축냄',
    },
    {
      color: 'amber',
      year: '1990',
      month: '4',
      company: 'kakao',
      experience: '업무시간에 잠',
    },
    {
      color: 'orange',
      year: '2000',
      month: '5',
      company: 'ROKCC',
      experience: '인턴',
    },
  ],
};

// refactoring, api migration as one function, and give parameter
export async function fetchAllFromServer(api) {
  const response = await axios.get(api);
  console.log(response);
  return response;
}
