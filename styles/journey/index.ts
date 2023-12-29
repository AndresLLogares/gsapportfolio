import styled from "styled-components";
import { fontSizes, fontFamily } from "../fonts";
import { paletteColors } from "../colors";

export const TitleCardTimeline = styled.h3<{
  $textcolorselected: string | null;
}>`
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : paletteColors.white};
  font-family: ${fontFamily.Exo2};
  font-size: ${fontSizes.subTitleWeb};
  font-weight: bold;
  margin-bottom: 2vh;
  margin-top: 2vh;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;

export const SubTitleCardTimeline = styled.h4<{
  $textcolorselected: string | null;
}>`
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : paletteColors.white};
  font-family: ${fontFamily.cousine};
  font-size: ${fontSizes.textWeb};
  font-weight: bold;
  margin-bottom: 2vh;
  margin-top: 2vh;
  margin: 0;
`;

export const TextCardTimeline = styled.h5<{
  $textcolorselected: string | null;
}>`
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : paletteColors.white};
  font-family: ${fontFamily.cousine};
  font-size: ${fontSizes.textWeb};
  margin-bottom: 1vh;
  margin-top: 1vh;
  margin: 0;
`;
