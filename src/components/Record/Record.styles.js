import styled from "styled-components/macro";
import { device, colors } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 100%;
  padding: 1em 0.5em;
  min-height: 50px;
  border-bottom: 2px solid ${colors.lightGray};
  display: flex;
  flex-wrap: wrap;
`;

export const RecordItem = styled.div`
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
`;

export const TypeOfTransaction = styled(RecordItem)`
  text-transform: uppercase;
  padding-bottom: 0.5em;
`;
export const DateOfTransaction = styled(RecordItem)`
  padding-bottom: 0.5em;
`;
export const AmountSent = styled(RecordItem)`
  padding-bottom: 0.5em;
`;
export const Amount = styled(RecordItem)``;
export const State = styled(RecordItem)``;
export const LinkDetail = styled(RecordItem)`
  color: ${colors.primary};
  font-weight: bold;
`;
