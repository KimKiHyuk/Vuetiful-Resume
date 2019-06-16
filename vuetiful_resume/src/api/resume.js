const mockAboutme = {
  information: {
    name: '김기혁',
    job: '소프트웨어 개발자',
    greet: 'Hello there11!',
    nation: '대한민국 서울특별시',
    introduce:
      'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
  }
}

const mockCareer = {
  information: [
    {
      color: "cyan",
      year: "1960",
      month: "1",
      company: "google inc",
      experience: "honey sucker"
    },
    {
      color: "green",
      year: "1970",
      month: "2",
      company: "microsoft",
      experience: "아무것도 안함"
    },
    {
      color: "pink",
      year: "1980",
      month: "3",
      company: "naver",
      experience: "월급 축냄"
    },
    {
      color: "amber",
      year: "1990",
      month: "4",
      company: "kakao",
      experience: "업무시간에 잠"
    },
    {
      color: "orange",
      year: "2000",
      month: "5",
      company: "ROKCC",
      experience: "인턴"
    }
  ]
}

export default {
  name: 'api',
  fetchAboutMeFromServer: () => mockAboutme,
  fetchCareerFromServer: () => mockCareer
}
