"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingComponent from "../../components/loading";
const CursorComponent = dynamic(() => import("../../components/cursor"), {
  loading: () => <LoadingComponent />,
});
const LayoutComponent = dynamic(() => import("../../components/layout"), {
  loading: () => <LoadingComponent />,
});
const MenuComponent = dynamic(() => import("../../components/navbar"), {
  loading: () => <LoadingComponent />,
});

const VerticalTimelineComponent = dynamic(
  () => import("../../components/journey")
);
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
