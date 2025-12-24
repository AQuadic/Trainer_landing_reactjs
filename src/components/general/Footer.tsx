import { NavLinks } from "@/constants/NavLinks";
import Facebbok from "../icons/general/Facebbok";
import Instagram from "../icons/general/Instagram";
import Whatsapp from "../icons/general/Whatsapp";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Email from "../icons/general/Email";
import Phone from "../icons/general/Phone";
import { useTranslation } from "react-i18next";
import { useMetaStore, type MetaState } from "@/store/useMetaStore";

const Footer = () => {
  const { t, i18n } = useTranslation("hero");
  const meta = useMetaStore((state: MetaState) => state.meta);
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
    <footer className="md:py-14.5 py-8 container">
      <div className="w-full h-0.5 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)]"></div>
      <div className="md:my-14.25 my-8 grid md:grid-cols-4 justify-between">
        <div className="">
          <img
            src={meta?.academy.logo.url || "/footerLogo.svg"}
            alt="footer logo"
            className="mx-auto md:mx-0"
          />
          <p className="text-[#565555] text-base font-medium mt-3 md:text-start text-center">
            {t("powerful_solution_footer")}
          </p>
          <div className="flex items-center md:justify-start justify-center gap-4 mt-6">
            <Facebbok />
            <Whatsapp />
            <Instagram />
          </div>
        </div>

        <div className="flex flex-col md:items-start items-center md:mt-0 mt-8">
          <h2 className="text-[#0F0F0F] text-base font-medium leading-[100%] mb-4">
            {t("links")}
          </h2>
          <nav className="flex flex-col md:items-start items-center gap-3">
            {NavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 ease-in-out text-base hover:font-semibold hover:text-[#15509C] ${
                  isHomeInTop90 ? "text-white" : "text-foreground"
                }`}
              >
                {i18n.language === "ar" ? link.nameAr : link.nameEn}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:items-start items-center md:mt-0 mt-6">
          <h2 className="text-[#0F0F0F] text-base font-medium leading-[100%] mb-4">
            {t("privacy")}
          </h2>
          <div className="flex flex-col gap-5">
            <Link
              to="/terms"
              className="text-[#0F0F0F] text-base leading-[100%] md:text-start text-center
                                        transition-colors duration-300 ease-in-out
                                        hover:text-[#15509C] hover:font-semibold"
            >
              {t("terms")}
            </Link>

            <Link
              to="/privacy"
              className="text-[#0F0F0F] text-base leading-[100%] md:text-start text-center
                                        transition-colors duration-300 ease-in-out
                                        hover:text-[#15509C] hover:font-semibold"
            >
              {t("privacy_policy")}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:items-start items-center md:mt-0 mt-4">
          <h2 className="text-[#0F0F0F] text-base font-medium leading-[100%] mb-4">
            {t("contact_us")}
          </h2>
          <a href="" className="flex  items-center gap-2">
            <Email />
            <p className="text-[#0F0F0F] text-base leading-[100%]">
              company@gmail.com
            </p>
          </a>

          <a href="" className="flex  items-center gap-2 mt-3">
            <Phone />
            <p className="text-[#0F0F0F] text-base leading-[100%]" dir="ltr">
              +20123654789
            </p>
          </a>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)]"></div>

      <p className="text-[#0F0F0F] md:text-base text-[10px] leading-[100%] mt-6 text-center">
        "All rights reserved © site 2025"
      </p>

      <p className="text-[#001B3F] md:text-base text-[10px] font-medium leading-[100%] text-center mt-3">
        Developed By AQuadic Software Solution
      </p>
    </footer>
  );
};

export default Footer;
