const onsikgo = {
  name: "onsikgo",
  title: "Onsikgo",
  subtitle: "소상공인을 위한 마감할인 서비스",
  date: "2022.07.04 ~ 2022.08.19",
  github: "https://github.com/move-geun/OnSikGo",
  member: 6,
  next: "MLBTI",
  gifcount: 9,
  btncount: 4,
  content: `판매되지 못한 채 버려지는 음식들이 환경오염에 끼치는 영향에 대해 생각했습니다.<br/>
  Onsikgo는 유통과 섭취에 전혀 문제가 없는 제품들에 한해 정상 판매가보다 할인된 가격에 가게와 고객을 
  연결하는 B2C 서비스입니다.`,
  role: `<h4>👇다음 기능을 구현하였습니다👇</h4><br/>
 - <span>Vue</span>와 <span>Vuex</span>를 사용하였습니다<br/>
 -  사용자 편의를 위해 웹앱 형식으로 구현하였습니다<br/>
 -  첫 사용 고객을 위한 소비자, 업주의 사용 설명서를 구성, 배치하였습니다<br/>
 - 현재 위치 또는 지정된 위치를 기준으로 세일 상품이 보이도록 구성하였습니다<br/>
 - 고객과 점주의 상태값에 따른 알림 페이지를 구현하였습니다<br/>
 - 상품 및 재고 CRUD 페이지를 구성하였습니다 <br/>
 - 워드 크라우드와 차트를 통해, 온식고를 통해 얻은 수익을 시각화하였습니다<br/>
  `,
};
const mlbti = {
  name: "mlbti",
  title: "MLBTI",
  subtitle: "빅데이터 분석을 활용한 mlb 경기 예측, 시뮬레이션 서비스",
  date: "2022.08.22 ~ 2022.10.07",
  github: "https://github.com/move-geun/MLBTI",
  member: 5,
  next: "Dstation",
  gifcount: 4,
  btncount: 4,
  content: `MLBTI는 '함께 즐기는 MLB경기'로, MLB Together Interesting의 약자입니다.<br/>
  날씨, 투구 시간, 타율, 역대 전적 등 MLB 경기 중에 쌓인 수많은 데이터를 활용하여 경기를 예측합니다. <br/>
  이에 그치지 않고, 역대 MLB 선수들로 이루어진 자신만의 팀을 만들어 실제 팀과 경기할 수 있는 시뮬레이션 서비스를 제공합니다.`,
  role: `<h4>👇다음 기능을 구현하였습니다👇</h4><br/>
 - React와 Redux를 사용하였습니다<br/>
 - 디스플레이 크기에 따른 반응형 웹을 구성하였습니다<br/>
 - 경기 예측 결과와 실제 경기 결과를 비교하여 시뮬레이션 서비스의 신뢰도를 높였습니다<br/>
 - 메인 페이지에서 당일 경기의 시뮬레이션을 볼 수 있도록 구현하였습니다 <br/>
 - 회원가입, 로그인, 개인 프로필 페이지 전반을 구현하였습니다<br/>
 - 방대한 양의 선수 데이터와 시뮬레이션 데이터의 로딩이 지루하지 않게 로딩 페이지를 구성하였습니다<br/>
  `,
};
const dstation = {
  name: "dstation",
  title: "D-Station",
  subtitle: "초보 개발자를 위한 학습 로드맵 서비스",
  date: "2022.10.11 ~ 2022.11.18",
  github: "https://github.com/move-geun/D-Station",
  member: 6,
  next: "Contact",
  gifcount: 5,
  btncount: 5,
  content: `개발의 수요가 늘어남에 따라, 많은 사람들이 개발 공부에 도전하고 있습니다. <br/>
  하지만 코딩을 처음 접하는 사람은 어느 것부터, 어떤 것을 공부해야하는지 막막합니다. <br/>
  그런 분들을 위한 개발자 로드맵 D-Station입니다.`,
  role: `<h4>👇다음 기능을 구현하였습니다👇</h4><br/>
 - React와 Recoil을 사용하였습니다<br/>
 - Three.js를 활용하여 페이지를 구현하였습니다<br/>
 - 사용자 편의를 위한 네비게이션을 구성하였습니다<br/>
 - 로딩 시간이 지루하지 않도록 CS 지식을 표시하였습니다<br/>
 - 학습을 통해 MD파일을 작성하게 될 경우 Git의 잔디처럼 학습량이 자동으로 기록되도록 구현하였습니다<br/>
 - 마이페이지와 개발 성향 조사를 위한 설문조사 페이지를 구현하였습니다<br/>
 - 경험치를 통해 나의 학습 수준을 한 눈에 알 수 있게 구성하였습니다<br/>
  `,
};

export { onsikgo, mlbti, dstation };
