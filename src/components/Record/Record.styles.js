import styled from "styled-components/macro";
import { device, colors } from "../../styles/theme";
import { fadeIn } from "../../styles/animation";
// import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 100%;
  padding: 1em 1em;
  min-height: 50px;
  border-bottom: 2px solid ${colors.lightGray};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  transition: background 0.3s ease;
  ${fadeIn({ time: ".5s" })};
  &:nth-of-type(odd) {
    background: ${colors.hoverCard};
  }
  &:hover {
    background: ${colors.lightPrimary};
  }
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
  ${device.tablet`
    padding-bottom: 0;
  `}
`;
export const DateOfTransaction = styled(RecordItem)`
  padding-bottom: 0.5em;
  ${device.tablet`
    padding-bottom: 0;
  `}
`;
export const AmountSent = styled(RecordItem)`
  padding-bottom: 0.5em;
  ${device.tablet`
    padding-bottom: 0;
  `}
`;
export const Amount = styled(RecordItem)``;
export const State = styled(RecordItem)``;
export const LinkDetail = styled(RecordItem)`
  color: ${colors.primary};
  font-weight: bold;
`;
