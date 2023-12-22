"use client";
import { AboutEnum, items } from "@/enums";
import { paletteColors } from "@/styles/colors";
import { ContainerMain } from "@/styles/main";
import { Suspense, lazy } from "react";
const CursorComponent = lazy(() => import("../../components/cursor"));
const LayoutComponent = lazy(() => import("../../components/layout"));
const MenuComponent = lazy(() => import("../../components/navbar"));
const LoadingComponent = lazy(() => import("../../components/loading"));
const NameComponent = lazy(() => import("../../components/name"));
const TextComponent = lazy(() => import("../../components/textAbout"));
const ContactComponent = lazy(() => import("../../components/contact"));
const InformationComponent = lazy(() => import("../../components/information"));

const MainContainer = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
      <Suspense fallback={<LoadingComponent />}>
        <CursorComponent />
        <MenuComponent items={items} />
        <ContainerMain>
          <NameComponent />
          <TextComponent />
          <ContactComponent />
          <InformationComponent
            $title={AboutEnum.TitleJourney}
            $content={AboutEnum.TextJourney}
          />
          <InformationComponent
            $title={AboutEnum.TitleProfessionalEthos}
            $content={AboutEnum.TextProfessionalEthos}
          />
        </ContainerMain>
      </Suspense>
    </LayoutComponent>
  );
};

export default MainContainer;
