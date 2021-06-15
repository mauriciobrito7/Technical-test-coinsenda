import styled from "styled-components/macro";
import { colors } from "../../styles/theme";
import { fadeIn } from "../../styles/animation";
import { Link } from "react-router-dom";

export const ContainerDetail = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  max-width: 480px;
  min-height: 360px;
  margin: 2em auto;
  ${fadeIn({ time: ".5s" })};
  &:nth-of-type(odd) {
    background: ${colors.hoverCard};
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  background: ${colors.primary};
`;

export const IconNavigation = styled(Link)`
  padding: 1em;
  svg {
    fill: ${colors.white};
    width: 2em;
    height: 2em;
  }
`;

export const Header = styled.header`
  background: ${colors.primary};
  color: ${colors.white};
  width: 100%;
  min-height: 20%;
  padding: 1em;
`;

export const HeaderTitle = styled.h2`
  color: ${colors.white};
`;

export const HeaderSubtitle = styled.h3`
  color: ${colors.white};
`;
export const Body = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const ListDetails = styled.ul`
  padding: 1em;
  list-style: none;
`;

export const Detail = styled.li`
  display: flex;
  margin-bottom: 1em;
`;

export const Field = styled.div`
  width: 50%;
`;

export const FieldValue = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
