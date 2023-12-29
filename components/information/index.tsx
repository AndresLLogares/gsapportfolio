"use client";
import {
  InformationContainer,
  TextStyled,
  TitleInformation,
} from "@/styles/main";
import { WrapperProps } from "@/enums";

const InformationComponent = (props: WrapperProps) => {
  return (
    <InformationContainer>
      <TitleInformation>{props.$title}</TitleInformation>
      <TextStyled>{props.$content}</TextStyled>
    </InformationContainer>
  );
};

export default InformationComponent;
