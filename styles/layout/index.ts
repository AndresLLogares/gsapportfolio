"use client";
import styles from "styled-components";
import { paletteColors } from "../colors";
import { Exo_2, Cousine } from "next/font/google";

export const LayoutStyled = styles.div<{ $backcolor?: string | null }>`
  align-items: center;
  background-color: ${(props) =>
    props.$backcolor ? `${props.$backcolor}` : `${paletteColors.white}`};
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: flex-start;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  width: 100%;

`;
