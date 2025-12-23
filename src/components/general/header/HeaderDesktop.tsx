"use client";

import { NavLinks } from "@/constants/NavLinks";
import { Link } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";
import RequestDemo from "./RequestDemo";
import HeaderScheduling from "@/components/icons/general/HeaderScheduling";
import HeaderBookings from "@/components/icons/general/HeaderBookings";
import OnlinePayments from "@/components/icons/general/OnlinePayments";
import HeaderAnalytics from "@/components/icons/general/HeaderAnalytics";
import YourOwnApp from "@/components/icons/general/YourOwnApp";
import HomeGateways from "@/components/icons/general/HomeGateways";
import HeaderManagement from "@/components/icons/general/HeaderManagement";
import Crossfit from "@/components/icons/general/Crossfit";
import Gym from "@/components/icons/general/Gym";
import FitnessTraining from "@/components/icons/general/FitnessTraining";
import MartialArts from "@/components/icons/general/MartialArts";
import SportsAcademies from "@/components/icons/general/SportsAcademies";
import SportsFederations from "@/components/icons/general/SportsFederations";
import EquestrianClubs from "@/components/icons/general/EquestrianClubs";
import Yoga from "@/components/icons/general/Yoga";

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

  const businessTypeSubmenu = [
    { path: "/business-type/crossfit", icon: <Crossfit />, label: "CrossFit" },
    { path: "/business-type/gym", icon: <Gym />, label: "Gym" },
    { path: "/business-type/fitness-training", icon: <FitnessTraining />, label: "Fitness Training" },
    { path: "/business-type/martial-arts", icon: <MartialArts />, label: "Martial Arts" },
    { path: "/business-type/sports-academies", icon: <SportsAcademies />, label: "Sports Academies" },
    { path: "/business-type/sports-federations", icon: <SportsFederations />, label: "Sports Federations" },
    { path: "/business-type/equestrian-clubs", icon: <EquestrianClubs />, label: "Equestrian Clubs" },
    { path: "/business-type/yoga", icon: <Yoga />, label: "Yoga" },
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
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`mx-4 transition-colors duration-300 ease-in-out ${
                    isHomeInTop90 ? "text-white" : "text-foreground"
                  }`}
                >
                  {link.nameEn}
                </Link>
                <div className="absolute left-0 top-full mt-2 w-48 rounded-4xl bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {featuresSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 first:rounded-t-4xl last:rounded-b-4xl transition-colors"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          if (link.path === "/business-type") {
            return (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`mx-4 transition-colors duration-300 ease-in-out ${
                    isHomeInTop90 ? "text-white" : "text-foreground"
                  }`}
                >
                  {link.nameEn}
                </Link>
                <div className="absolute left-0 top-full mt-2 w-56 rounded-4xl bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {businessTypeSubmenu.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 first:rounded-t-4xl last:rounded-b-4xl transition-colors"
                    >
                        <span className="shrink-0">{item.icon}</span>
                        <span className="text-sm font-medium text-foreground">
                        {item.label}
                        </span>
                    </Link>
                    ))}
                </div>
              </div>
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