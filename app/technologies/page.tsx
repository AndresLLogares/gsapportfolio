"use client";
import LoadingComponent from "@/components/loading";
import { TechnologiesContainer } from "@/containers";

export default function Journey() {
  const isSSR = typeof window === "undefined";

  return <>{!isSSR ? <TechnologiesContainer /> : <LoadingComponent />}</>;
}
