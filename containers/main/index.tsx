"use client";
import { AboutEnum, items } from "@/enums";
import { paletteColors } from "@/styles/colors";
import { ContainerMain } from "@/styles/main";
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

const NameComponent = dynamic(() => import("../../components/name"), {
  loading: () => <LoadingComponent />,
});
const TextComponent = dynamic(() => import("../../components/textAbout"), {
  loading: () => <LoadingComponent />,
});
const ContactComponent = dynamic(() => import("../../components/contact"), {
  loading: () => <LoadingComponent />,
});
const InformationComponent = dynamic(
  () => import("../../components/information")
);

const MainContainer = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
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
    </LayoutComponent>
  );
};

export default MainContainer;
