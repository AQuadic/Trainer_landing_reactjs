"use client";

import { NavLinks } from "@/constants/NavLinks";
import { Link } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";
import RequestDemo from "./RequestDemo";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import HeaderScheduling from "@/components/icons/general/HeaderScheduling";
import HeaderBookings from "@/components/icons/general/HeaderBookings";
import OnlinePayments from "@/components/icons/general/OnlinePayments";
import HeaderAnalytics from "@/components/icons/general/HeaderAnalytics";
import YourOwnApp from "@/components/icons/general/YourOwnApp";
import HomeGateways from "@/components/icons/general/HomeGateways";
import HeaderManagement from "@/components/icons/general/HeaderManagement";

interface HeaderDesktopProps {
  isHomeInTop90: boolean;
}

const HeaderDesktop = ({ isHomeInTop90 }: HeaderDesktopProps) => {
  const featuresSubmenu = [
    { path: "/features/management", icon: <HeaderManagement />, label: "Management" },
    { path: "/features/scheduling", icon: <HeaderScheduling />, label: "Scheduling" },
    { path: "/features/scheduling", icon: <HeaderBookings />, label: "Bookings" },
    { path: "/features/management", icon: <OnlinePayments />, label: "Online Payments" },
    { path: "/features/analytics", icon: <HeaderAnalytics />, label: "Analytics" },
    { path: "/features/your_own_app", icon: <YourOwnApp />, label: "Your Own App" },
    { path: "/features/gateways", icon: <HomeGateways />, label: "Gateways" },
  ];

  return (
    <header
      className={`container hidden lg:flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-3 transition-colors duration-300 ease-in-out ${
        isHomeInTop90 ? "bg-transparent" : "bg-transparent"
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
                  {featuresSubmenu.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link to={item.path}>
                        {item.icon}
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

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

export default HeaderDesktop;