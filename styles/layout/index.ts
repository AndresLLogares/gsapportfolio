"use client";
import styles from "styled-components";
import { paletteColors } from "../colors";
import { Exo_2, Cousine } from "next/font/google";

export const LayoutStyled = styles.div<{ $backcolor?: string | null }>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  background-color: ${(props) =>
    props.$backcolor ? `${props.$backcolor}` : `${paletteColors.white}`};
`;
