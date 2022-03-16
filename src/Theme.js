import {createGlobalStyle} from "styled-components";

export const DarkTheme = createGlobalStyle`
  * {
    background-color: #0B0B0B !important;
    border-radius: 10px !important;
    border-color: black !important;
  }

  img {
    background: unset !important;
  }

  h1, h2, h3, h4, h5, h6, b, p, span, font, center, input {
    color: white !important;
    background: unset !important;
  }

  .profile_nav button, .profile_nav .btn {
    color: white !important;
  }

  .pricing_navigation .pricing_nav p {
    border-radius: 5px !important;
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

  .formCont {
    background: #343434 !important;
  }

  .emailVerifyCard {
    border: none;
    background: #343434 !important;
  }

  .show_more_list .show_more_list_div span {
    background: #343434 !important;
    border-radius: 5px !important;
  }

  .downloads_box_card_content {
    background: #343434 !important;
  }

  .content_list {
    background: #484848 !important;
  }

  .dropdown #dropdownMenuButton {
    background: #484848 !important;
  }

  .dropdown-menu.show {
    background: #484848 !important;
    color: white !important;
  }

  .dropdown-menu a {
    color: white !important;
  }

  .slider {
    background-color: #414040 !important;
  }

  .css-viou3o-MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input {
    color: red !important;
  }

  .payment_content {
    border: 0.5px solid #313131 !important;
    box-shadow: 1px 0px 5px 2px rgb(49, 49, 49);
    -webkit-box-shadow: 1px 0px 5px 2px rgb(49, 49, 49);
    -moz-box-shadow: 1px 0px 5px 2px rgb(49, 49, 49);
  }
`;