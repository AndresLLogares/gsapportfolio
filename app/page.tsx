"use client";
import LoadingComponent from "@/components/loading";
import { MainConatiner } from "@/containers";

export default function Home() {
  const isSSR = typeof window === "undefined";
  return <>{!isSSR ? <MainConatiner /> : <LoadingComponent />}</>;
}
