import styled from "styled-components/macro";
import { colors } from "../../styles/theme";
import { Link } from "react-router-dom";

export const RecordContainer = styled.div`
  width: 100%;
  padding: 1em 0.5em;
  min-height: 50px;
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  flex-wrap: wrap;
`;
export const RecordItem = styled.div`
  border: 1px dashed brown;
  width: 50%;
`;

export const TypeOfTransaction = styled(RecordItem)`
  text-transform: uppercase;
`;
export const DateOfTransaction = styled(RecordItem)``;
export const Amount = styled(RecordItem)``;
export const Status = styled(RecordItem)``;
export const LinkDetail = styled(RecordItem)`
  color: ${colors.primary};
  font-weight: bold;
`;
