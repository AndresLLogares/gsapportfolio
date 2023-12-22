"use client";
import React, { useRef, useState, useEffect, createRef } from "react";
import gsap from "gsap";
import { ButtonStyled, IndicatorStyled, MenuStyled } from "@/styles/navbar";
import { animatePageOut } from "@/animations";
import { useRouter, usePathname } from "next/navigation";
import { enumsPath, items } from "@/enums";
import NavMobile from "../navmobile";

const MenuComponent: React.FC<{ items: typeof items }> = ({ items }) => {
  const $root = useRef<HTMLDivElement>(null);
  const $indicator1 = useRef<HTMLDivElement>(null);
  const $indicator2 = useRef<HTMLDivElement>(null);
  const $items = useRef(items.map(() => createRef<HTMLButtonElement>()));
  const [active, setActive] = useState(0);
  const router = useRouter();
  const currentURL = usePathname();
  const [showButton, setShowButton] = useState(false);

  const animate = () => {
    if (!$root.current || !$indicator1.current || !$indicator2.current) return;

    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;

    if (!activeItem) return;

    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width,
      height,
      backgroundColor: items[active].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to($indicator1.current, {
      ...settings,
    });

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1,
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]);

  const handleLink = (href, router) => {
    if (currentURL === enumsPath.home && href === enumsPath.home) return;
    if (
      currentURL === enumsPath.technologies &&
      href === enumsPath.technologies
    )
      return;
    if (currentURL === enumsPath.about && href === enumsPath.about) return;
    animatePageOut(href, router);
  };

  const changeNavButton = () => {
    if (window.innerWidth < 1024) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", changeNavButton);
  }, []);

  return (
    <>
      {showButton ? (
        <NavMobile />
      ) : (
        <MenuStyled ref={$root}>
          {items.map((item, index) => (
            <ButtonStyled
              key={item.name}
              ref={$items.current[index]}
              className={`item ${active === index ? "active" : ""}`}
              onMouseEnter={() => {
                setActive(index);
              }}
              onClick={() => handleLink(item.href, router)}
            >
              {item.name}
            </ButtonStyled>
          ))}
          <IndicatorStyled ref={$indicator1} className="indicator" />
          <IndicatorStyled ref={$indicator2} className="indicator" />
        </MenuStyled>
      )}
    </>
  );
};

export default MenuComponent;
