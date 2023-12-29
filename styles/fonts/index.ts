import { Exo_2, Cousine } from "next/font/google";
const cousine = Cousine({ subsets: ["latin"], weight: "700" });
const Exo2 = Exo_2({ subsets: ["latin"] });

export const fontSizes = {
  subTitleMobile: "15px",
  subTitleWeb: "25px",
  textMobile: "15px",
  textWeb: "15px",
  titleMobile: "30px",
  titleWeb: "40px",
};

export const fontFamily = {
  cousine: cousine,
  Exo2: Exo2,
};
