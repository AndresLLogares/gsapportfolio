"use client";

import { Suspense, lazy } from "react";
const CursorComponent = lazy(() => import("../../components/cursor"));
const LayoutComponent = lazy(() => import("../../components/layout"));
const MenuComponent = lazy(() => import("../../components/navbar"));
const LoadingComponent = lazy(() => import("../../components/loading"));
const VerticalTimelineComponent = lazy(
  () => import("../../components/journey")
);
import { items } from "@/enums";
import { paletteColors } from "@/styles/colors";

const JourneyContainer = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
      <Suspense fallback={<LoadingComponent />}>
        <CursorComponent />
        <MenuComponent items={items} />
        <VerticalTimelineComponent />
      </Suspense>
    </LayoutComponent>
  );
};

export default JourneyContainer;
