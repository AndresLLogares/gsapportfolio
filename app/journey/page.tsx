"use client";
import LoadingComponent from "@/components/loading";

import { JourneyContainer } from "@/containers";

export default function Journey() {
  const isSSR = typeof window === "undefined";
  return <>{!isSSR ? <JourneyContainer /> : <LoadingComponent />}</>;
}
