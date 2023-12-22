"use client";
import { WrapperProps } from "@/enums";
import {
  InformationContainer,
  TextStyled,
  TitleInformation,
} from "@/styles/main";

const InformationComponent = (props: WrapperProps) => {
  return (
    <InformationContainer>
      <TitleInformation>{props.$title}</TitleInformation>
      <TextStyled>{props.$content}</TextStyled>
    </InformationContainer>
  );
};

export default InformationComponent;
