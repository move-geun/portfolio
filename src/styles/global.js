import { createGlobalStyle } from "styled-components";

// const color = useRecoilValue(BackgroundColor);

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'MICEGothic Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
body{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    padding: 0;
    color: white;
    background: #212121;
    font-family: 'MICEGothic Bold';
    height: 100%;
      ::-webkit-scrollbar {
    display: none;
  }
}
a{
    text-decoration: none;
    color: black;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
input, button{
    border:none;
    background-color: white;
    white-space: nowrap;
}
input:focus,
input:active,
button:focus,
button:active {
  outline: none;
  box-shadow: none;
}
div {
    white-space: nowrap;
}
`;

export default GlobalStyle;
