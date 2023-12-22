"use client";
import { AboutEnum } from "@/enums";
import { ContainerGlitch, GlitchText } from "@/styles/name";

const NameComponent = () => {
  return (
    <ContainerGlitch>
      <GlitchText>
        <span aria-hidden="true">{AboutEnum.Name}</span>
        {AboutEnum.Name}
        <span aria-hidden="true">{AboutEnum.Name}</span>{" "}
      </GlitchText>
    </ContainerGlitch>
  );
};

export default NameComponent;
