"use client";
import { animatePageOut } from "@/animations";
import { AnimatePresence, motion } from "framer-motion";
import { enumsPath, items } from "@/enums";
import { fontFamily, fontSizes } from "@/styles/fonts";
import { paletteColors } from "@/styles/colors";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useState } from "react";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const currentURL = usePathname();
  const router = useRouter();

  useClickAway(ref, () => setOpen(false));
  const handleLink = (href, router) => {
    if (currentURL === enumsPath.home && href === enumsPath.home) return;
    if (
      currentURL === enumsPath.technologies &&
      href === enumsPath.technologies
    )
      return;
    if (currentURL === enumsPath.about && href === enumsPath.about) return;
    setOpen((prev) => !prev);
    animatePageOut(href, router);
  };
  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              width: "100%",
              backgroundColor: `${paletteColors.black}`,
              top: "3.5rem",
              left: "0",
              borderRadius: "5px",
              border: `3px solid ${paletteColors.black}`,
              zIndex: 10,
            }}
          >
            <ul className="grid gap-2">
              {items.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.name}
                    style={{
                      display: "flex",
                      width: "100%",
                      backgroundColor: `${paletteColors.white}`,
                      borderRadius: "30px",
                    }}
                  >
                    <a
                      onClick={() => handleLink(route.href, router)}
                      style={{
                        display: "flex",
                        width: "100%",
                        backgroundColor: `${paletteColors.black}`,
                        borderRadius: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `3px solid ${paletteColors.orange}`,
                        padding: "10px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          width: "100%",
                          color: `${paletteColors.white}`,
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: `${fontFamily.cousine}`,
                          fontSize: `${fontSizes.textWeb}`,
                          fontWeight: "bold",
                        }}
                      >
                        {route.name}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
