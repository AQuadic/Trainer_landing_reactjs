"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Link } from "react-router-dom";
import BackArrow from "../icons/pricing/BackArrow";
import { useTranslation } from "react-i18next";

const faqsData = [
  { id: "item1" },
  { id: "item2" },
  { id: "item3" },
  { id: "item4" },
  { id: "item5" },
];

const FAQs = () => {
  const { t } = useTranslation("faq");
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="container md:pt-32 pt-20 pb-17">
        <Link to='/' className="md:hidden flex items-center gap-13.25 mb-6">
          <BackArrow />
          <p className="text-[#0F0F0F] text-xl font-semibold">{t("mobileBack")}</p>
      </Link>
      <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold text-center">
        {t("heading")}
      </h2>

      <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
        {(() => {
          const lines = t("description").split("\n");
          return lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ));
        })()}
      </p>

      <div className="mt-12 space-y-4">
        <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
          {faqsData.map((faq, index) => {
            const isOpen = openItem === faq.id;
            return (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={`border border-[#C8C8C8] rounded-4xl px-4 transition-colors mt-10 [&_svg]:hidden ${
                  isOpen ? "bg-[#F3F7FC]" : "bg-white"
                }`}
              >
                <AccordionTrigger className="flex justify-between items-center">
                  <p className="text-[#0F0F0F] md:text-2xl text-sm font-semibold leading-[100%]">
                    <span className="md:text-[32px] text-base mr-4">{`0${index + 1}`}</span>
                    {t(`items.${faq.id}.question`)}
                  </p>
                  <span className="text-3xl font-bold">{isOpen ? "-" : "+"}</span>
                </AccordionTrigger>
                <AccordionContent>
                  {t(`items.${faq.id}.answer`)}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
