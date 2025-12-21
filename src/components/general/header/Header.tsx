import { NavLinks } from "@/constants/NavLinks";
import { Link, useLocation } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";
import RequestDemo from "./RequestDemo";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <header className="container flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-3">
      <Link to="/">
        <img
          src={isHomePage ? "/logo_white.svg" : "/logo_blue.svg"}
          alt="Logo"
        />
      </Link>
      <div>
        {NavLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mx-4 ${isHomePage ? "text-white" : "text-white"}`}
          >
            {link.nameEn}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <ChangeLanguage />
        <RequestDemo />
      </div>
    </header>
  );
};

export default Header;
