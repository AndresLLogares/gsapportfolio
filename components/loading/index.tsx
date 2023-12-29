"use client";
import { LayoutComponent } from "..";
import { paletteColors } from "@/styles/colors";
import { Spinner, Box } from "@/styles/loading";

const LoadingComponent = () => {
  return (
    <LayoutComponent $backcolor={paletteColors.white}>
      <Box>
        <Spinner />
      </Box>
    </LayoutComponent>
  );
};

export default LoadingComponent;
