"use client";
import { Suspense, lazy } from "react";
const CursorComponent = lazy(() => import("../../components/cursor"));
const LayoutComponent = lazy(() => import("../../components/layout"));
const MenuComponent = lazy(() => import("../../components/navbar"));
const LoadingComponent = lazy(() => import("../../components/loading"));
const TechnologiesComponent = lazy(
  () => import("../../components/technologies")
);

import { items } from "@/enums";
import { paletteColors } from "@/styles/colors";

const TechnologiesContainer = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
      <Suspense fallback={<LoadingComponent />}>
        <MenuComponent items={items} />
        <CursorComponent />
        <TechnologiesComponent />
      </Suspense>
    </LayoutComponent>
  );
};

export default TechnologiesContainer;
