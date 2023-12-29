"use client";
import { LayoutStyled } from "@/styles/layout";
import { WrapperProps } from "@/enums";

const LayoutComponent = (props: WrapperProps) => {
  return (
    <LayoutStyled $backcolor={props.$backcolor} className="gap-[50px]">
      {props.children}
    </LayoutStyled>
  );
};

export default LayoutComponent;
