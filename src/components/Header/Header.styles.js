import styled from "styled-components/macro";
import { colors } from "../../styles/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  border-bottom: 1px solid ${colors.gray};
  padding: 0 1em;
  color: ${colors.white};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 50px;
  img {
    width: 100%;
  }
`;

export const Author = styled.div``;
