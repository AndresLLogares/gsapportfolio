"use client";
import { WrapperProps } from "@/enums";
import { paletteColors } from "@/styles/colors";
import { LayoutStyled } from "@/styles/layout";
import CursorStyle from "../cursor";

const LayoutComponent = (props: WrapperProps) => {
  return (
    <LayoutStyled $backcolor={props.$backcolor} className="gap-[50px]">
      {props.children}
    </LayoutStyled>
  );
};

export default LayoutComponent;
