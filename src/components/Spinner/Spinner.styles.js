import styled from "styled-components/macro";
import { device, colors } from "../../styles/theme";

export const LoadRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: calc(50% - 40px) calc(50% - 40px);
  ${device.tablet`
    margin: calc(10% - 40px) calc(50% - 40px);

  `}
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 4px solid white;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.primary} transparent transparent transparent;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
