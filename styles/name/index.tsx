import styled from "styled-components";
import { paletteColors } from "../colors";
import { glitchAnimation } from "../animations";
import { fontSizes, fontFamily } from "../fonts";

export const ContainerGlitch = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  margin-bottom: 3vh;
  margin-top: 3vh;
  margin: 0;
  width: 100%;
  @media (max-width: 1024px) {
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;

export const GlitchText = styled.div`
  animation: ${glitchAnimation} 725ms infinite;
  color: ${paletteColors.black};
  display: flex;
  font-family: ${fontFamily.Exo2};
  font-size: ${fontSizes.titleWeb};
  font-weight: bold;
  position: relative;
  text-align: center;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  span {
    left: 0;
    position: absolute;
    top: 0;
  }
  span:first-child {
    animation: ${glitchAnimation} 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    opacity: 0.75;
    transform: translate(-0.04em, -0.03em);
  }

  span:last-child {
    animation: ${glitchAnimation} 375ms infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    opacity: 0.75;
    transform: translate(0.04em, 0.03em);
  }
  @media (max-width: 1024px) {
    font-size: ${fontSizes.titleMobile};
  }
`;
