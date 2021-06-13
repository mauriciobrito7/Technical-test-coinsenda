import styled from "styled-components/macro";
import { breakpoints, device } from "../../styles/theme";

export const MainContent = styled.main`
  border: 1px dashed crimson;
  margin: 1em 1em;
  max-width: ${breakpoints.desktop};
  ${device.desktop`
    margin-right: auto;
    margin-left: auto; 
  `}
`;
