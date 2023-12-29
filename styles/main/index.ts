import styled from "styled-components";
import { paletteColors } from "../colors";
import { fontSizes, fontFamily } from "../fonts";

export const ContainerMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  z-index: 2;
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  margin-bottom: 3vh;
  margin: 0;
  width: 50%;
  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 2vh;
  }
`;

export const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  margin-bottom: 3vh;
  margin: 0;
  width: 50%;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 90%;
    margin-top: 2vh;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 80%;
  height: fit-content;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  margin-top: 3vh;
  margin-bottom: 3vh;
  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 2vh;
    margin-botto2vh;
  }
`;

export const TitleInformation = styled.h3`
  display: flex;
  font-family: ${fontFamily.Exo2};
  font-size: ${fontSizes.subTitleWeb};
  margin-bottom: 2vh;
  color: ${paletteColors.lightGrey};
  text-shadow: 0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black},
    0 0 4px ${paletteColors.black}, 0 0 4px ${paletteColors.black};
  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;

export const TextStyled = styled.h5`
  display: flex;
  font-family: ${fontFamily.cousine};
  font-size: ${fontSizes.textWeb};
  margin: 0;
  font-weight: bold;
  color: ${paletteColors.black};
  @media (max-width: 1024px) {
    font-size: ${fontSizes.textMobile};
  }
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 5px;
  background-color: ${paletteColors.lightGrey};
  border: solid 3px ${paletteColors.black};
  box-shadow: -5px 5px ${paletteColors.black}, -4px 4px ${paletteColors.black},
    -2px 2px ${paletteColors.black};
  border-radius: 5px;
  transition-duration: 1s;
  margin-right: 15px;
  margin-left: 15px;
  transform: skewX(5deg);
  transiton-duration: 1s;
  &:hover {
    transform: translate(5px, 5px);
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
