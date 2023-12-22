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
const TechnologiesComponent = dynamic(
  () => import("../../components/technologies")
);

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
