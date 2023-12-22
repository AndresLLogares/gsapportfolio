"use client";
import {
  CursorComponent,
  LayoutComponent,
  MenuComponent,
  TechnologiesComponent,
} from "@/components";
import { items } from "@/enums";
import { paletteColors } from "@/styles/colors";

const TechnologiesContainer = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
      <MenuComponent items={items} />
      <CursorComponent />
      <TechnologiesComponent />
    </LayoutComponent>
  );
};

export default TechnologiesContainer;
