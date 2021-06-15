import styled from "styled-components/macro";
import { colors } from "../../styles/theme";

export const Message = styled.h3`
  color: ${colors.red};
  margin-bottom: 0.5em;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  margin-bottom: 0.5em;
  padding: 0.4em;
  border-radius: 4px;
  border: 1px solid ${colors.gray};
  width: 100%;

  &:focus {
    outline-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  font-weight: bold;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
`;
