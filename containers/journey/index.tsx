"use client";

import {
  CursorComponent,
  InformationComponent,
  LayoutComponent,
  MenuComponent,
} from "@/components";
import { VerticalTimelineComponent } from "@/components/journey";
import { AboutEnum, WrapperProps, items } from "@/enums";
import { paletteColors } from "@/styles/colors";

const JourneyContainer = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
      <CursorComponent />
      <MenuComponent items={items} />
      <VerticalTimelineComponent />
    </LayoutComponent>
  );
};

export default JourneyContainer;
