import { keyframes, css } from "styled-components";

const fadeInKeyFrame = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;

    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;
export const fadeIn = ({
  time = ".5s",
  type = "ease",
  delay = "0.2s",
} = {}) => {
  return css`
    animation: ${time} ${fadeInKeyFrame} ${type};
    will-change: transform;
  `;
};
