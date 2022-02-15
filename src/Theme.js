import {createGlobalStyle} from "styled-components";

export const DarkTheme=createGlobalStyle`
    * {
      color: white !important;
      background-color: rgb(10, 7, 7, 0.8) !important;
      border-radius: 0.1px !important;
    },
    .btn, button {
      border: 0.2px solid white !important;
      border-radius: 5px !important;
    },
    p, a {
      color: rgb(170, 170, 170) !important;
    },
    .footer .footer_row {
      border-top: 0.5px solid rgb(155, 155, 155);
    },
    .AboutEnvironment .AboutEnvironment_rows .content span {
      background-color: white !important;
      color: black !important;
    },
    .AboutEnvironment .AboutEnvironment_rows img {
      background: white;
    },
    .premium_row .body {
      background: rgba(31, 11, 11, 0.5) !important;
    },
    .premium_row .body :is(div, h4, span) {
      background-color: unset !important;
    },
    .premium_row .body .text-content a {
      border-color: rgb(255, 255, 255) !important;
      transition: 0.5s ease-in-out;
    },
    .premium_row .body .text-content a:hover, .btn:hover {
      border-color: rgb(255, 0, 0) !important;
      color: red !important;
    },
    li:hover {
      border: 0.5px solid red !important;
    },
    .navbar {
      background: #2e2e2e !important;
    },
    .navbar li, .navbar li a {
      background: #2e2e2e !important;
    },
    .navbar li:hover {
      border: unset !important;
    },
    .slider {
      background-color: #ccc !important;
    },
    input:checked+.slider {
      background-color: green !important;
    },
    .beta {
      border-bottom: 0.5px solid rgb(85, 85, 85) !important;
      background-image: unset !important;
    }
`;