import styled from "styled-components";
import { paletteColors } from "../colors";
import { glitchAnimation } from "../animations";
import { fontSizes, fontFamily } from "../fonts";

export const ContainerGlitch = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 3vh;
  margin-bottom: 3vh;
  @media (max-width: 1024px) {
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;

export const GlitchText = styled.div`
  display: flex;
  font-size: ${fontSizes.titleWeb};
  font-weight: bold;
  text-align: center;
  color: ${paletteColors.black};
  font-family: ${fontFamily.Exo2};
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: ${glitchAnimation} 725ms infinite;
  span {
    position: absolute;
    top: 0;
    left: 0;
  }
  span:first-child {
    animation: ${glitchAnimation} 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-0.04em, -0.03em);
    opacity: 0.75;
  }

  span:last-child {
    animation: ${glitchAnimation} 375ms infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(0.04em, 0.03em);
    opacity: 0.75;
  }
  @media (max-width: 1024px) {
    font-size: ${fontSizes.titleMobile};
  }
`;
