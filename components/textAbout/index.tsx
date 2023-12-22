"use client";
import { AboutEnum } from "@/enums";
import { TextContainer, TextStyled } from "@/styles/main";

const TextComponent = () => {
  return (
    <TextContainer>
      <TextStyled>{AboutEnum.TextAbout}</TextStyled>
    </TextContainer>
  );
};

export default TextComponent;
