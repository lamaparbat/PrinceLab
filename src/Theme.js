import {createGlobalStyle} from "styled-components";

export const DarkTheme = createGlobalStyle`
  * {
    color: white !important;
    background-color: #0B0B0B !important;
    border-radius: 10px !important;
    border-color: black !important;
  }

  img {
    background: unset !important;
  }

  h1, h2, h3, h4, h5, h6, b, p, span, font {
    color: white !important;
    background: unset !important;
  }

  button, .btn, a {
    border: 0px solid black !important;
  }

  .languages {
    background: #131341 !important;
  }

  .Download .rows, .guide .guide_rows {
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

  @media (max-width: 800px) {
    .parallel .roundedDiv .content h1 {
      font-size: 30px;
      text-align: center;
    }

    .parallel .roundedDiv img {
      padding-top: 40px;
      padding-bottom: 40px;
      position: relative;
    }
  }

  @media (max-width: 490px) {
    .parallel .roundedDiv {
      border-radius: 20px !important;
    }
  }

  .cards .card1 .body, .cards .card2, .cards .card2 .card2_features, .cards .card2 .quotes {
    background-color: #1C1C1C !important;
  }

  .journey .content #on {
    color: #e8e8e8 !important;
  }

  .cardRow_card {
    background: #1C1C1C !important;
  }

  .cardRow_card .card_features span {
    color: #e9e9e9 !important;
  }

  .form .box .content #or {
    background-color: rgb(28, 28, 28) !important;
  }

  .resp_nav .items li {
    border: 1px solid #3d3d3d !important;
  }
  .form .box .content .username_inp, .password_inp {
    border: 1px solid rgb(87, 87, 87) !important;
  }
  .formCont{
    background:#343434 !important;
  }

`;