import React from "react";
import { useLocation } from "react-router-dom";

const ChangeLanguage = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <div className="flex items-center justify-center gap-2">
      <img
        src={
          isHomePage ? "layout/language_black.svg" : "layout/language_white.svg"
        }
        alt="Change Language"
      />
      <span>English</span>
    </div>
  );
};

export default ChangeLanguage;
