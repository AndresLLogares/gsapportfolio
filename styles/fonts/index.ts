import { Exo_2, Cousine } from "next/font/google";
const cousine = Cousine({ subsets: ["latin"], weight: "700" });
const Exo2 = Exo_2({ subsets: ["latin"] });

export const fontSizes = {
  titleWeb: "40px",
  titleMobile: "30px",
  subTitleWeb: "25px",
  subTitleMobile: "15px",
  textWeb: "15px",
  textMobile: "15px",
};

export const fontFamily = {
  cousine: cousine,
  Exo2: Exo2,
};
