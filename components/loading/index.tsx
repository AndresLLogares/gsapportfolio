"use client";
import { paletteColors } from "@/styles/colors";
import { Spinner, Box } from "@/styles/loading";
import { LayoutComponent } from "..";

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
