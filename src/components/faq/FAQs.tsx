"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqsData = [
  { id: "item-1", question: "Is there a free trial?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
  { id: "item-2", question: "Are all features available in every plan?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
  { id: "item-3", question: "Can I switch between plans later?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
  { id: "item-4", question: "Do you provide training for my team?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
  { id: "item-5", question: "Can I access the system from any device?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
];

const FAQs = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="container py-32">
      <h2 className="text-[#001B3F] text-[32px] font-semibold text-center">
        Frequently Asked Questions
      </h2>

      <p className="text-[#565555] text-lg font-medium leading-[150%] mt-6 text-center">
        Find answers to the most common questions about our services and features. This guide helps you get the information you need <br /> quickly and easily.
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
                  <p className="text-[#0F0F0F] text-2xl font-semibold leading-[100%]">
                    <span className="text-[32px] mr-4">{`0${index + 1}`}</span>
                    {faq.question}
                  </p>
                  <span className="text-3xl font-bold">{isOpen ? "-" : "+"}</span>
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
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
