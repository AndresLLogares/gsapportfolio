import styled from "styled-components";
import { paletteColors } from "../colors";
import { fontFamily, fontSizes } from "../fonts";

export const DivComponentTechnologies = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
export const ButtonTechnologiesComponent = styled.a`
  align-items: center;
  background-color: ${paletteColors.black};
  border-radius: 5px;
  box-shadow: -5px 5px ${paletteColors.black}, -4px 4px ${paletteColors.black},
  -2px 2px ${paletteColors.black};
  border: 3px solid ${paletteColors.orange};
  color: ${paletteColors.white};
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.cousine}
  font-size: ${fontSizes.textWeb}
  font-weight: bold;
  height: 95px;
  justify-content: center;
  margin-bottom: 30px;
  margin-left: 50px;
  margin-right: 50px;
  transition-duration: 1s;
  transform: skewX(5deg);
  transiton-duration: 1s;
  text-decoration: none;
  width: 95px;


  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
