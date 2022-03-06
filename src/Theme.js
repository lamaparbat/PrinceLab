import {createGlobalStyle} from "styled-components";

export const DarkTheme = createGlobalStyle`
  * {
    color: white !important;
    background-color: #0B0B0B !important;
    border-radius: 10px !important;
    border-color: black !important;
  }
  img{
    background:unset !important;
  }
  h1,h2,h3,h4,h5,h6,b,p , span, font{
    background:unset !important;
  }
  button,.btn, a{
    border:0px solid black !important;
  }
  .languages{
    background:#131341 !important;
  }
  .Download .rows {
    padding: 20px;
    background: #1C1C1C !important;
  }

  .parallel {
    background-color: #1C1C1C !important;
  }

  .cards_container .card1, .cards_container .card2 {
    background-color: #1C1C1C !important;
  }

  .parallel .roundedDiv {
    border-radius: 150px !important;
  }
  @media (max-width:800px) {
    .parallel .roundedDiv .content h1 {
      font-size:30px;
      text-align:center;
    }
    .parallel .roundedDiv img{
      padding-top: 40px;
      padding-bottom: 40px;
      position: relative;
    }
  }
  @media (max-width:490px) {
    .parallel .roundedDiv  {
      border-radius:20px !important;
    }
  }
`;