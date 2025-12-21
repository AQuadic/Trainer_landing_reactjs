"use client";

import { NavLinks } from "@/constants/NavLinks";
import { Link, useLocation } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";
import RequestDemo from "./RequestDemo";
import { useEffect, useState } from "react";

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
    <header
      className={`container flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-3 transition-colors duration-300 ease-in-out ${
        isHomeInTop90 ? "bg-transparent" : "bg-white "
      }`}
    >
      <Link to="/" aria-label="Home" className="relative inline-block">
        <span className="relative block w-[150px] h-[40px]">
          <img
            src="/logo_white.svg"
            alt="Logo white"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-350 ease-in-out ${
              isHomeInTop90 ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src="/logo_blue.svg"
            alt="Logo blue"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-350 ease-in-out ${
              isHomeInTop90 ? "opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </Link>

      <nav>
        {NavLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mx-4 transition-colors duration-300 ease-in-out ${
              isHomeInTop90 ? "text-white" : "text-foreground"
            }`}
          >
            {link.nameEn}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <ChangeLanguage isHome={isHomeInTop90} />
        <RequestDemo isHome={isHomeInTop90} />
      </div>
    </header>
  );
};

export default Header;
