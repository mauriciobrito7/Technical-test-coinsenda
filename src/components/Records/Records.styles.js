import styled from "styled-components/macro";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 256px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0.5em;
  border: 1px dashed blueviolet;
  width: 100%;
  height: 100%;
`;

export const EmptyList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
