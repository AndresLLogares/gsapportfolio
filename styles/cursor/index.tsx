"use client";
import styled from "styled-components";
import { paletteColors } from "../colors";

export const StyledBall = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid ${paletteColors.orange};
  border-radius: 50%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledPointer = styled.div`
  width: 10px;
  height: 10px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${paletteColors.black};
  border-radius: 50%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
