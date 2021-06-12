import { createGlobalStyle } from "styled-components";
import MuseoSansFont from "../assets/fonts/MuseoSans.otf";
import MuseoSansBoldFont from "../assets/fonts/MuseoSansBold.otf";

const GlobalStyles = createGlobalStyle`
  @font-face{ 
    font-family: 'Museo Sans';
    src: local('Museo Sans'), url(${MuseoSansFont}) format('truetype');
    font-weight: normal;
  }

  @font-face{
    font-family: 'Museo Sans Bold';
    src: local('Museo Sans'), url(${MuseoSansBoldFont}) format('truetype');
    font-weight: bold;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Museo Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    border: 4px dashed gold;
  }

  a{
	  text-decoration:none;
  }

  label, input, textarea{
    display:block;
  }

  main{
    padding-bottom: 4em;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Museo Sans Bold';
    font-weight: bold;
  }

  h1 {
    font-size: 1em * 1.7;
  }

  h2 {
    font-size: 1em * 1.35;
  }

  h3 {
    font-size: 1em * 1.2;
  }
  
`;
export default GlobalStyles;
