"use client";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const { pathname } = useLocation();
  const [isHomeInTop90, setIsHomeInTop90] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let threshold = window.innerHeight * 0.94;

    const check = () => {
      const atTop = window.scrollY < threshold;
      setIsHomeInTop90(pathname === "/" && atTop);
    };

    const onResize = () => {
      threshold = window.innerHeight * 0.94;
      check();
    };

    check();

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return (
    <>
      <HeaderDesktop isHomeInTop90={isHomeInTop90} />
      <HeaderMobile isHomeInTop90={isHomeInTop90} />
    </>
  );
};

export default Header;