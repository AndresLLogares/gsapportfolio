import {
  CursorComponent,
  LayoutComponent,
  NameComponent,
  TextComponent,
  ContactComponent,
  InformationComponent,
  MenuComponent,
} from "@/components";
import { AboutEnum, items } from "@/enums";
import { paletteColors } from "@/styles/colors";
import { ContainerMain } from "@/styles/main";
import React from "react";

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
      {/* <TransitionLink href="/about" label="About ->" /> */}
    </LayoutComponent>
  );
};

export default MainContainer;
