import styled from "styled-components/macro";
import { colors, device, breakpoints } from "../../styles/theme";

export const FilterContainer = styled.nav`
  max-width: ${breakpoints.tablet};
  height: 50px;
  background: ${colors.lightGray};
  border-radius: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1.5em;
  overflow: auto hidden;
  padding: 1em;
`;

export const Btn = styled.button`
  background: ${(props) =>
    props.active ? `${colors.primary}` : `${colors.gray}`};
  color: ${colors.white};
  border: none;
  font-size: 1em;
  border-radius: 1em;
  height: 2em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.3s ease;
  margin-right: 1em;
  ${device.tablet`
    margin-right: 0;

  `}

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background: ${colors.primary};
  }
`;
