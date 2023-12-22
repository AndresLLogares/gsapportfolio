import styled from "styled-components";
import { fontSizes, fontFamily } from "../fonts";
import { paletteColors } from "../colors";

export const TitleCardTimeline = styled.h3<{
  $textcolorselected: string | null;
}>`
  font-size: ${fontSizes.subTitleWeb};
  font-weight: bold;
  font-family: ${fontFamily.Exo2};
  margin: 0;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : paletteColors.white};
  @media (max-width: 1024px) {
    font-size: ${fontSizes.subTitleMobile};
  }
`;

export const SubTitleCardTimeline = styled.h4<{
  $textcolorselected: string | null;
}>`
  font-size: ${fontSizes.textWeb};
  font-weight: bold;
  font-family: ${fontFamily.cousine};
  margin: 0;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : paletteColors.white};
`;

export const TextCardTimeline = styled.p<{ $textcolorselected: string | null }>`
  font-size: ${fontSizes.textWeb};
  font-family: ${fontFamily.cousine};
  margin: 0;
  margin-bottom: 1vh;
  margin-top: 1vh;
  color: ${(props) =>
    props.$textcolorselected
      ? `${props.$textcolorselected}`
      : paletteColors.white};
`;
