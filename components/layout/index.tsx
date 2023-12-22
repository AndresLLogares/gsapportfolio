"use client";
import { WrapperProps } from "@/enums";
import { LayoutStyled } from "@/styles/layout";

const LayoutComponent = (props: WrapperProps) => {
  return (
    <LayoutStyled $backcolor={props.$backcolor} className="gap-[50px]">
      {props.children}
    </LayoutStyled>
  );
};

export default LayoutComponent;
