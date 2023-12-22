import styled from "styled-components";
import { paletteColors } from "../colors";
import { fontSizes, fontFamily } from "../fonts";

export const MenuStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 10px;
  width: 90%;
  margin: 0;
  border-bottom: 1px solid ${paletteColors.orange};
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonStyled = styled.button`
  padding: 18px 28px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  text-decoration: none;
  color: ${paletteColors.black};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: ${fontSizes.textWeb};
  font-weight: bold;
  margin: 5px 0;
  font-family: ${fontFamily.cousine};
  &.active {
    color: ${paletteColors.white};
  }
  @media (max-width: 1024px) {
    font-size: ${fontSizes.textMobile};
    margin: 3px 0;
  }
`;

export const IndicatorStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 30px;
`;
