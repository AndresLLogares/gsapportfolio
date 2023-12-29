"use client";
import styled from "styled-components";
import { paletteColors } from "../colors";

export const StyledBall = styled.div`
  border-radius: 50%;
  border: 2px solid ${paletteColors.orange};
  height: 50px;
  left: 0;
  position: fixed;
  top: 0;
  width: 50px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledPointer = styled.div`
  background-color: ${paletteColors.black};
  border-radius: 50%;
  height: 10px;
  left: 0;
  position: fixed;
  top: 0;
  width: 10px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
