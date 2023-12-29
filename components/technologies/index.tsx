"use client";

import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiApollographql,
  SiExpress,
  SiGatsby,
  SiGraphql,
  SiMaterialdesign,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";
import { TechnologiesEnum } from "@/enums";
import {
  DivComponentTechnologies,
  ButtonTechnologiesComponent,
} from "@/styles/technologies";

const TechnologiesComponent = () => {
  return (
    <DivComponentTechnologies>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://es.reactjs.org/"
      >
        <FaReact style={{ fontSize: "30px" }} />
        {TechnologiesEnum.React}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://nodejs.org/es/"
      >
        <FaNodeJs style={{ fontSize: "30px" }} />
        {TechnologiesEnum.NodeJS}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://github.com/"
      >
        <FaGithub style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Github}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://www.javascript.com/"
      >
        <IoLogoJavascript style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Javascript}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://es.redux.js.org/"
      >
        <SiRedux style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Redux}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://expressjs.com/"
      >
        <SiExpress style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Express}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://www.apollographql.com/"
      >
        <SiApollographql style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Apollo}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://graphql.org/"
      >
        <SiGraphql style={{ fontSize: "30px" }} />
        {TechnologiesEnum.GraphQL}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://html.com/"
      >
        <FaHtml5 style={{ fontSize: "30px" }} />
        {TechnologiesEnum.HTML}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://www.w3.org/Style/CSS/Overview.en.html"
      >
        <FaCss3 style={{ fontSize: "30px" }} />
        {TechnologiesEnum.CSS}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://www.mongodb.com/"
      >
        <SiMongodb style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Mongo}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://nextjs.org/"
      >
        <SiNextdotjs style={{ fontSize: "30px" }} />
        {TechnologiesEnum.NextJS}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://nestjs.com/"
      >
        <SiNestjs style={{ fontSize: "30px" }} />
        {TechnologiesEnum.NestJS}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://www.typescriptlang.org/"
      >
        <SiTypescript style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Typescript}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://www.gatsbyjs.com/"
      >
        <SiGatsby style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Gatsby}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://mui.com/"
      >
        <SiMaterialdesign style={{ fontSize: "30px" }} />
        {TechnologiesEnum.MaterialUI}
      </ButtonTechnologiesComponent>
      <ButtonTechnologiesComponent
        rel="noreferrer"
        target="_blank"
        href="https://solidity-es.readthedocs.io/es/latest/"
      >
        <SiSolidity style={{ fontSize: "30px" }} />
        {TechnologiesEnum.Solidity}
      </ButtonTechnologiesComponent>
    </DivComponentTechnologies>
  );
};

export default TechnologiesComponent;
