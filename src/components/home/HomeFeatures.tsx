import Analytics from "../icons/home/Analytics";
import Bookings from "../icons/home/Bookings";
import Gateways from "../icons/home/Gateways";
import Management from "../icons/home/Management";
import OnlinePayments from "../icons/home/OnlinePayments";
import Scheduling from "../icons/home/Scheduling";
import YourOwnApp from "../icons/home/YourOwnApp";
import { useTranslation } from "react-i18next";

interface Props {
  selected: number;
  onSelect: (index: number) => void;
}

const HomeFeatures = ({ selected, onSelect }: Props) => {
  const { t } = useTranslation("homefeatures");

  const FeaturesData = [
    { icon: Management, text: t('management') },
    { icon: Scheduling, text: t('scheduling') },
    { icon: Bookings, text: t('bookings') },
    { icon: OnlinePayments, text: t('online_payments') },
    { icon: Analytics, text: t('analytics') },
    { icon: YourOwnApp, text: t('your_own_app') },
    { icon: Gateways, text: t('gateways') },
  ];

  return (
    <section className="container py-17">
      <div className="md:mt-14.5 mt-4 flex flex-wrap items-center justify-center gap-4">
        {FeaturesData.map((item, index) => {
          const isActive = selected === index;

          return (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className={`cursor-pointer rounded-[22px] p-0.75 transition-all
                    ${
                      isActive
                        ? "bg-linear-to-r from-[#15509C] to-[#071C36]"
                        : "bg-transparent"
                    }`}
            >
              <div className="md:w-39 w-24 md:h-39 h-24 bg-[#F3F7FC] rounded-4xl flex flex-col items-center justify-center md:gap-4 gap-3">
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
