import styled from "styled-components";
import { paletteColors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";

export const DivComponentTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonTechnologiesComponent = styled.a`
  display: flex;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-family: ${fontFamily.cousine}
  font-size: ${fontSizes.textWeb}
  font-weight: bold;
  width: 95px;
  height: 95px;
  border-radius: 5px;
  color: ${paletteColors.white};
  background-color: ${paletteColors.black};
  box-shadow: -5px 5px ${paletteColors.black}, -4px 4px ${paletteColors.black},
    -2px 2px ${paletteColors.black};
  border: 3px solid ${paletteColors.orange};
  transition-duration: 1s;
  transform: skewX(5deg);
  transiton-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 20px;
  }
`;
