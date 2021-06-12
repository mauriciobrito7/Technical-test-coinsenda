import { createGlobalStyle } from "styled-components";
import MuseoSansFont from "../assets/fonts/MuseoSans.otf";

const GlobalStyles = createGlobalStyle`
  @font-face{ 
    font-family: 'Museo Sans';
    src: local('Museo Sans'), url(${MuseoSansFont}) format('truetype');
    font-weight: normal;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Museo Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
export default GlobalStyles;
