import styled from "styled-components";
import { paletteColors } from "../colors";
import { fontSizes, fontFamily } from "../fonts";

export const MenuStyled = styled.div`
  align-items: center;
  border-bottom: 1px solid ${paletteColors.orange};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 10px;
  position: relative;
  width: 90%;
  z-index: 1;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonStyled = styled.button`
  color: ${paletteColors.black};
  cursor: pointer;
  font-family: ${fontFamily.cousine};
  font-size: ${fontSizes.textWeb};
  font-weight: bold;
  letter-spacing: 0.05em;
  margin: 5px 0;
  padding: 18px 28px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease-out;
  &.active {
    color: ${paletteColors.white};
  }
  @media (max-width: 1024px) {
    font-size: ${fontSizes.textMobile};
    margin: 3px 0;
  }
`;

export const IndicatorStyled = styled.div`
  border-radius: 30px;
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;
