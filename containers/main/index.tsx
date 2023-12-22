"use client";
import { AboutEnum, items } from "@/enums";
import { paletteColors } from "@/styles/colors";
import { ContainerMain } from "@/styles/main";
import {
  CursorComponent,
  InformationComponent,
  LayoutComponent,
  MenuComponent,
  NameComponent,
  TextComponent,
  ContactComponent,
} from "@/components";
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
