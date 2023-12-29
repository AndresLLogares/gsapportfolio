import styled from "styled-components";
import { rotate360 } from "../animations";
import { paletteColors } from "../colors";

export const Box = styled.div`
  align-items: center;
  background-color: ${paletteColors.white};
  background-image: radial-gradient(
    #fba92c 0.7px,
    ${paletteColors.white} 0.7px
  );
  background-size: 15px 15px;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 100vh;
  opacity: 1;
  width: 100%;

  z-index: 3;
  @media (max-width: 1024px) {
    height: fit-content;
    background-size: 15px 15px;
    overflow: hidden;
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  background: transparent;
  border-bottom: 5px solid ${paletteColors.orange};
  border-left: 8px solid ${paletteColors.black};
  border-radius: 50%;
  border-right: 5px solid ${paletteColors.orange};
  border-top: 5px solid ${paletteColors.orange};
  display: flex;
  height: 154px;
  margin-top: 20vh;
  transform: translateZ(0);
  width: 154px;
`;
