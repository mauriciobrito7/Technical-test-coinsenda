import styled from "styled-components/macro";
import { colors } from "../../styles/theme";
import { fadeIn } from "../../styles/animation";

export const ModalBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${fadeIn({ time: ".5s" })};
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 10em;
  background: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  padding: 1em;
  width: 400px;
`;
