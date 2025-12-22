"use client";

import { NavLinks } from "@/constants/NavLinks";
import { Link, useLocation } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";
import RequestDemo from "./RequestDemo";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import HeaderScheduling from "@/components/icons/general/HeaderScheduling";
import HeaderBookings from "@/components/icons/general/HeaderBookings";
import OnlinePayments from "@/components/icons/general/OnlinePayments";
import HeaderAnalytics from "@/components/icons/general/HeaderAnalytics";
import YourOwnApp from "@/components/icons/general/YourOwnApp";
import HomeGateways from "@/components/icons/general/HomeGateways";
import HeaderManagement from "@/components/icons/general/HeaderManagement";

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
        <span className="relative block w-37.5 h-10">
          <img
            src="/logo_white.svg"
            alt="Logo white"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-350 ease-in-out ${
              isHomeInTop90 ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src="/footerLogo.svg"
            alt="Logo blue"
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-350 ease-in-out ${
              isHomeInTop90 ? "opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </Link>

      <nav className="flex items-center">
        {NavLinks.map((link) => {
          if (link.path === "/features") {
            return (
              <DropdownMenu key={link.path}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`mx-4 transition-colors duration-300 ease-in-out ${
                      isHomeInTop90 ? "text-white" : "text-foreground"
                    }`}
                  >
                    {link.nameEn}
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="w-48 mt-2 rounded-4xl"
                >
                  <DropdownMenuItem asChild>
                    <Link to="/features/management">
                    <HeaderManagement />
                      Management
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/features/scheduling">
                      <HeaderScheduling />
                      Scheduling
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/features/bookings">
                      <HeaderBookings />
                      Bookings
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/features/online_payments">
                      <OnlinePayments />
                      Online Payments
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/features/analytics">
                      <HeaderAnalytics />
                      Analytics
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/features/your_own_app">
                      <YourOwnApp />
                      Your Own App
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/features/gateways">
                      <HomeGateways />
                      Gateways
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          // ✅ NORMAL LINKS
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`mx-4 transition-colors duration-300 ease-in-out ${
                isHomeInTop90 ? "text-white" : "text-foreground"
              }`}
            >
              {link.nameEn}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-6">
        <ChangeLanguage isHome={isHomeInTop90} />
        <RequestDemo isHome={isHomeInTop90} />
      </div>
    </header>
  );
};

export default Header;
