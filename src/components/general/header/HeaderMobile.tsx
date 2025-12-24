"use client";

import { NavLinks } from "@/constants/NavLinks";
import { Link, useLocation } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";
import RequestDemo from "./RequestDemo";
import { useEffect, useState } from "react";
import HeaderScheduling from "@/components/icons/general/HeaderScheduling";
import HeaderBookings from "@/components/icons/general/HeaderBookings";
import OnlinePayments from "@/components/icons/general/OnlinePayments";
import HeaderAnalytics from "@/components/icons/general/HeaderAnalytics";
import YourOwnApp from "@/components/icons/general/YourOwnApp";
import HomeGateways from "@/components/icons/general/HomeGateways";
import HeaderManagement from "@/components/icons/general/HeaderManagement";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Menu from "@/components/icons/general/Menu";
import { useTranslation } from "react-i18next";
import Crossfit from "@/components/icons/general/Crossfit";
import Gym from "@/components/icons/general/Gym";
import FitnessTraining from "@/components/icons/general/FitnessTraining";
import MartialArts from "@/components/icons/general/MartialArts";
import SportsAcademies from "@/components/icons/general/SportsAcademies";
import SportsFederations from "@/components/icons/general/SportsFederations";
import EquestrianClubs from "@/components/icons/general/EquestrianClubs";
import Yoga from "@/components/icons/general/Yoga";

interface HeaderMobileProps {
  isHomeInTop90: boolean;
}

const HeaderMobile = ({ isHomeInTop90 }: HeaderMobileProps) => {
  const { t, i18n } = useTranslation("hero");
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isBusinessTypeOpen, setIsBusinessTypeOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsFeaturesOpen(false);
    setIsBusinessTypeOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const featuresSubmenu = [
    { path: "/features/management", icon: <HeaderManagement />, label: t("management") },
    { path: "/features/scheduling", icon: <HeaderScheduling />, label: t("scheduling") },
    { path: "/features/bookings", icon: <HeaderBookings />, label: t("bookings") },
    { path: "/features/onlinePayments", icon: <OnlinePayments />, label: t("online_payments") },
    { path: "/features/analytics", icon: <HeaderAnalytics />, label: t("analytics") },
    { path: "/features/yourOwnApp", icon: <YourOwnApp />, label: t("your_own_app") },
    { path: "/features/gateways", icon: <HomeGateways />, label: t("gateways") },
  ];

  const businessTypeSubmenu = [
    { path: "/business-type/crossfit", icon: <Crossfit />, label: t("crossfit") },
    { path: "/business-type/gym", icon: <Gym />, label: t("gym") },
    { path: "/business-type/fitness-training", icon: <FitnessTraining />, label: t("fitness_training") },
    { path: "/business-type/martial-arts", icon: <MartialArts />, label: t("martial_arts") },
    { path: "/business-type/sports-academies", icon: <SportsAcademies />, label: t("sports_academies") },
    { path: "/business-type/sports-federations", icon: <SportsFederations />, label: t("sports_federations") },
    { path: "/business-type/equestrian-clubs", icon: <EquestrianClubs />, label: t("equestrian_clubs") },
    { path: "/business-type/yoga", icon: <Yoga />, label: t("yoga") },
  ];

  return (
    <>
      <header
        className={`container lg:hidden flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-3 transition-colors duration-300 ease-in-out ${
          isHomeInTop90 ? "bg-transparent" : "bg-[#15509C]"
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
              src="/logo_white.svg"
              alt="Logo blue"
              className={`absolute top-2 inset-0 w-15.25 h-6.75 object-contain transition-opacity duration-350 ease-in-out ${
                isHomeInTop90 ? "opacity-0" : "opacity-100"
              }`}
            />
          </span>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 transition-colors duration-300 ease-in-out ${isHomeInTop90 ? "text-white" : "text-foreground"}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <img src="/footerLogo.svg" alt="Logo" className="h-8 object-contain" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 p-6 overflow-y-auto">
                  <ul className="space-y-2">
                    {NavLinks.map((link) => {
                      if (link.path === "/features") {
                        return (
                          <li key={link.path} className="border border-[#C8C8C8] rounded-4xl">
                            <button
                              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                              className="flex items-center justify-between w-full px-4 py-2 text-foreground font-medium hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <span>{i18n.language === "ar" ? link.nameAr : link.nameEn}</span>
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${isFeaturesOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            <AnimatePresence>
                              {isFeaturesOpen && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="space-y-1 mt-2 ltr:ml-4 rtl:mr-4">
                                    {featuresSubmenu.map((item) => (
                                      <li key={item.path}>
                                        <Link
                                          to={item.path}
                                          className="flex items-center gap-3 py-2 text-[#000000] hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                          <span>{item.label}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </div>
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      }

                      if (link.path === "/business-type") {
                        return (
                          <li key={link.path} className="border border-[#C8C8C8] rounded-4xl">
                            <button
                              onClick={() => setIsBusinessTypeOpen(!isBusinessTypeOpen)}
                              className="flex items-center justify-between w-full px-4 py-2 text-foreground font-medium hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <span>{i18n.language === "ar" ? link.nameAr : link.nameEn}</span>
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${isBusinessTypeOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            <AnimatePresence>
                              {isBusinessTypeOpen && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="space-y-1 mt-2 ltr:ml-4 rtl:mr-4">
                                    {businessTypeSubmenu.map((item) => (
                                      <li key={item.path}>
                                        <Link
                                          to={item.path}
                                          className="flex items-center gap-3 py-2 text-[#000000] hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                          <span>{item.label}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </div>
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      }

                      return (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className="block px-4 py-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {i18n.language === "ar" ? link.nameAr : link.nameEn}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="p-2 space-y-4">
                  <div className="flex justify-center border border-[#072E60] rounded-4xl p-3">
                    <ChangeLanguage isHome={false} />
                  </div>
                  <RequestDemo isHome={false} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderMobile;
