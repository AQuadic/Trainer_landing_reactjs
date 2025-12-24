import { useTranslation } from "react-i18next";

interface Props {
  selectedFeature: number;
}

const HomeMembership = ({ selectedFeature }: Props) => {
  const { t } = useTranslation("homemembership");

  const contentMap = [
    {
      title: t("management_title"),
      desc: t("management_description"),
    },
    {
      title: t("scheduling_title"),
      desc: t("scheduling_description"),
    },
    {
      title: t("bookings_title"),
      desc: t("bookings_description"),
    },
    {
      title: t("payments_title"),
      desc: t("payments_description"),
    },
    {
      title: t("analytics_title"),
      desc: t("analytics_description"),
    },
    {
      title: t("app_title"),
      desc: t("app_description"),
    },
    {
      title: t("gateways_title"),
      desc: t("gateways_description"),
    },
  ];

  const current = contentMap[selectedFeature];

    return (
        <section className="bg-[#F3F7FC] md:py-19 py-8">
            <div className="container flex lg:flex-row flex-col items-center">
                <div>
                    <h2 className="text-[#001B3F] md:text-[32px] text-xl font-semibold">
                        {current.title}
                    </h2>

                    <p className="text-[#565555] md:text-2xl text-base font-medium leading-[150%] mt-6">
                        {current.desc}
                    </p>
                    <button className="w-full h-12 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)] rounded-4xl">
                        {t('see_more')}
                    </button>
                </div>
                <div className="w-full">
                    <img
                        src="/images/blog/membership_img.png"
                        alt="membership image"
                        className="md:w-123.75 h-107.5"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeMembership
