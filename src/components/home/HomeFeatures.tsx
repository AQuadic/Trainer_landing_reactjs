import { useState } from "react";
import Analytics from "../icons/home/Analytics";
import Bookings from "../icons/home/Bookings";
import Gateways from "../icons/home/Gateways";
import Management from "../icons/home/Management";
import OnlinePayments from "../icons/home/OnlinePayments";
import Scheduling from "../icons/home/Scheduling";
import YourOwnApp from "../icons/home/YourOwnApp";

const HomeFeatures = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const FeaturesData = [
    { icon: Management, text: "Management" },
    { icon: Scheduling, text: "Scheduling" },
    { icon: Bookings, text: "Bookings" },
    { icon: OnlinePayments, text: "Online Payments" },
    { icon: Analytics, text: "Analytics" },
    { icon: YourOwnApp, text: "Your Own App" },
    { icon: Gateways, text: "Gateways" },
  ];

  return (
    <section className="container py-17 h-dvh">
      <h2 className="md:block hidden text-[#001B3F] text-[32px] font-semibold leading-[100%] text-center">
        We Make Managing Your Business Easy and Professional
      </h2>

      <h2 className="md:hidden block text-[#001B3F] text-base font-semibold leading-[150%] text-center">
        Manage, Grow, and Optimize Your Sports Business Effortlessly
      </h2>

      <p className="md:block hidden text-[#565555] text-2xl font-medium mt-6 leading-[150%] text-center">
        “Handle bookings, memberships, classes, and payments seamlessly—all in
        one smart platform <br />
        designed to grow your sports business.”
      </p>

      <p className="md:hidden block text-[#565555] text-xs font-medium mt-3 leading-[150%] text-center">
        “Manage bookings, memberships, and classes—all in one platform built to
        grow your sports business.”
      </p>

      <div className="md:mt-14.5 mt-4 flex flex-wrap items-center justify-center gap-4">
        {FeaturesData.map((item, index) => {
          const isActive = selected === index;

          return (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`cursor-pointer rounded-[22px] p-0.75 transition-all
                    ${
                      isActive
                        ? "bg-linear-to-r from-[#15509C] to-[#071C36]"
                        : "bg-transparent"
                    }`}
            >
              <div className="md:w-39 w-24 md:h-39 h-24 bg-[#F3F7FC] rounded-[20px] flex flex-col items-center justify-center md:gap-4 gap-3">
                <item.icon />
                <p className="text-[#001B3F] md:text-base text-[10px] font-semibold text-center">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFeatures;
