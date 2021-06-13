import styled from "styled-components/macro";
import { device } from "../../styles/theme";

export const Title = styled.h2`
  margin-bottom: 1em;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 256px;
`;

export const Headers = styled.header`
  width: 100%;
  display: flex;
`;

export const RecordHead = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  &:nth-of-type(even) {
    justify-content: flex-end;
  }
  ${device.tablet`
    width: 16.6%;
    justify-content: center !important;
  `}
  font-family: "Museo Sans Bold";
`;

export const List = styled.ul`
  list-style: none;
  padding: 0.5em;
  width: 100%;
  height: 100%;
`;

export const EmptyList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
