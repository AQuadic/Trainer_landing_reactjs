import { useLocation } from "react-router-dom";

const ChangeLanguage = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <button className="flex items-center justify-center gap-2">
      <img
        src={
          isHomePage ? "layout/language_white.svg" : "layout/language_black.svg"
        }
        alt="Change Language"
      />
      <span className={`${isHomePage ? "text-white" : "text-foreground"}`}>
        English
      </span>
    </button>
  );
};

export default ChangeLanguage;
