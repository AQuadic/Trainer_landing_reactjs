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
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const [isHomeInTop90, setIsHomeInTop90] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsFeaturesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
  <>
    <header
      className={`container flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-3 transition-colors duration-300 ease-in-out ${
        isHomeInTop90 ? "bg-transparent" : "bg-transparent "
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

      <nav className="hidden lg:flex items-center">
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

      <div className="hidden lg:flex items-center gap-6">
        <ChangeLanguage isHome={isHomeInTop90} />
        <RequestDemo isHome={isHomeInTop90} />
      </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ease-in-out ${
            isHomeInTop90 ? "text-white" : "text-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
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
                  <img
                    src="/footerLogo.svg"
                    alt="Logo"
                    className="h-8 object-contain"
                  />
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
                              <span>{link.nameEn}</span>
                              <ChevronDown 
                                size={20} 
                                className={`transition-transform duration-200 ${
                                  isFeaturesOpen ? "rotate-180" : ""
                                }`}
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
                                  <div className="space-y-1 mt-2 ml-4">
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

                      return (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className="block px-4 py-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {link.nameEn}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="p-6 border-t space-y-4 bg-gray-50">
                  <div className="flex justify-center">
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

export default Header;
