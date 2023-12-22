"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { StyledBall, StyledPointer } from "../../styles/cursor";

const CursorComponent = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "back.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <>
      <StyledBall className="ball"></StyledBall>
      <StyledPointer className="ball"></StyledPointer>
    </>
  );
};

export default CursorComponent;
