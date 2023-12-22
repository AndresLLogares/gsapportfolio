import styled from "styled-components";
import { rotate360 } from "../animations";
import { paletteColors } from "../colors";

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${paletteColors.white};
  opacity: 1;
  background-image: radial-gradient(
    #fba92c 0.7px,
    ${paletteColors.white} 0.7px
  );
  background-size: 15px 15px;
  z-index: 3;
  @media (max-width: 1024px) {
    height: fit-content;
    background-size: 15px 15px;
    overflow: hidden;
  }
`;

export const Spinner = styled.div`
  display: flex;
  margin-top: 20vh;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 5px solid ${paletteColors.orange};
  border-right: 5px solid ${paletteColors.orange};
  border-bottom: 5px solid ${paletteColors.orange};
  border-left: 8px solid ${paletteColors.black};
  background: transparent;
  width: 154px;
  height: 154px;
  border-radius: 50%;
`;
