"use client";

import {
  CursorComponent,
  LayoutComponent,
  MenuComponent,
  VerticalTimelineComponent,
} from "@/components";
import { items } from "@/enums";
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
