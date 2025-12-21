import { NavLinks } from "@/constants/NavLinks";
import { Link, useLocation } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <header className="container flex justify-between fixed top-0 left-0 right-0 z-50 ">
      <Link to="/">
        <img
          src={isHomePage ? "/logo_blue.svg" : "/logo_white.svg"}
          alt="Logo"
        />
      </Link>
      <div>
        {NavLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mx-4 ${isHomePage ? "text-blue-600" : "text-white"}`}
          >
            {link.nameEn}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <ChangeLanguage />
        <span>Request a demo</span>
      </div>
    </header>
  );
};

export default Header;
