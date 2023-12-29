import { paletteColors } from "@/styles/colors";

export interface WrapperProps {
  $backcolor?: string;
  $content?: string;
  $title?: string;
  children?: React.ReactNode;
}
export enum AboutEnum {
  Name = "I'm Andrés Logares",
  Role = "Software Developer",
  TextAbout = "Hello! I'm Andrés, a passionate Full Stack Developer from Argentina, currently based in the vibrant city of Buenos Aires. With a background deeply rooted in technology, I thrive on crafting innovative solutions to real-world problems.",
  TextJourney = "My journey in the tech industry has equipped me with invaluable skills and experiences. As an experienced Full Stack Developer, I've honed my analytical thinking and collaboration abilities, making me an effective team player. I have a relentless thirst for knowledge and a commitment to staying at the forefront of technology trends. I'm constantly exploring new technologies, learning, and growing, which fuels my passion for innovation.",
  TextProfessionalEthos = "In my role at Accenture, I am part of an exciting project, developing a cutting-edge banking application. My primary focus is on upholding the highest standards of security and ethical practices throughout the development process. I take pride in diligently meeting client requirements and consistently delivering exceptional results. Moreover, I actively contribute by proposing innovative ideas to enhance and expedite the application's development, always striving for continuous improvement. I firmly believe in the importance of professional growth. That's why I enthusiastically participate in ongoing internal training courses offered by Accenture. By continually expanding my skill set and knowledge, I aim to enhance my career trajectory and contribute to the success of the company.",
  TitleAbout = "About Me",
  TitleJourney = "My Journey",
  TitleProfessionalEthos = "Professional Ethos",
}

export enum enumsPath {
  home = "/",
  about = "/journey",
  technologies = "/technologies",
}

export const items = [
  {
    name: "My Journey",
    color: `${paletteColors.black}`,
    href: enumsPath.about,
    label: "Journey ->",
  },
  {
    name: "Home",
    color: `${paletteColors.darkGrey}`,
    href: enumsPath.home,
    label: "Home ->",
  },
  {
    name: "Technologies",
    color: `${paletteColors.orange}`,
    href: enumsPath.technologies,
    label: "Technologies ->",
  },
];

export enum ExperienceEnum {
  Accenture = "ACCENTURE",
  AccentureDate = "JULY 2023 | PRESENT",
  AccentureFirst = "⬤ As a valued team member at Accenture, I am currently engaged in an exciting project to develop a cutting-edge banking application. My primary focus is ensuring the highest standards of security and ethics throughout the development process",
  AccentureFourth = "⬤ Overall, my dedication to excellence, strong adherence to security and ethics, and commitment to continuous learning make me a valuable asset to the Accenture team.",
  AccentureSecond = "⬤ In my role, I diligently comply with the client's requirements, consistently delivering exceptional results. Additionally, I actively contribute by proposing innovative ideas to enhance and expedite the application's development, striving for continuous improvement.",
  AccentureThird = "⬤ Recognizing the importance of professional growth, I enthusiastically participate in ongoing internal training courses offered by Accenture. By continuously expanding my skill set and knowledge, I aim to enhance my career trajectory and contribute to the company's success.",
  ALT = "ALT / BANCO GALICIA",
  ALTDate = "MAY 2022 | JULY 2023",
  ALTFirst = "⬤ Developing a React application that seamlessly integrates with both terminal hardware services and the Bank's BFF.",
  ALTFourth = "⬤ Collaborating with cross-functional teams to deliver innovative solutions and optimize user experiences.",
  ALTSecond = "⬤ Enhancing self-service terminals by updating the software, prioritizing user control and security.",
  ALTThird = "⬤ Implementing robust security measures to ensure a safe operational environment for clients and the Bank.",
  OCTOSOFT = "OCTOSOFT",
  OCTOSOFTDate = "AUGUST 2021 | MAY 2022",
  OCTOSOFTFirst = "⬤ Developed and structured feature-rich web client websites, ensuring adherence to company policies and high-quality code standards.",
  OCTOSOFTFourth = "⬤ Actively participated in weekly progress meetings, aligning with team goals and discussing project advancements.",
  OCTOSOFTSecond = "⬤ Worked closely with project managers and creative teams to deliver original and effective solutions, providing expert advice to clients.",
  OCTOSOFTThird = "⬤ Collaborated within a team to design, structure, and implement new websites from inception to completion, as well as updating existing websites.",
  Title = "My Journey",
}

export enum TechnologiesEnum {
  Apollo = "Apollo",
  CSS = "CSS",
  Express = "Express",
  Gatsby = "Gatsby",
  Github = "Github",
  GraphQL = "GraphQL",
  HTML = "HTML",
  Javascript = "Javascript",
  MaterialUI = "Material UI",
  Mongo = "Mongo",
  NestJS = "NestJS",
  NextJS = "NextJS",
  NodeJS = "NodeJS",
  React = "React",
  Redux = "Redux",
  RXJS = "RXJS",
  Solidity = "Solidity",
  StyledComponent = "Styled Component",
  Title = "My Technologies",
  Typescript = "Typescript",
}
