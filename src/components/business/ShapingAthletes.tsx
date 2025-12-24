import { useTranslation } from "react-i18next";

const ShapingAthletes = () => {
    const { t } = useTranslation("businesstype");
    return (
        <section className="bg-[#F3F7FC] py-8 mt-8">
            <div className="container flex flex-wrap items-center justify-between gap-8">
                <div className="mx-auto md:mx-0">
                    <img
                        src="/images/features/smart_class.png"
                        alt="smart_class"
                        className="w-40.75 h-53.75 md:w-114.25 md:h-136.5"
                    />
                </div>

                <div>
                <h2 className="text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    {t("shapingAthletesTitle")}
                </h2>

                <p className="md:w-150 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    {t("shapingAthletesDescription")}
                </p>

                <div className="relative mt-6 w-full rounded-4xl p-[1.5px] gradient-border">
                    <button
                        className="relative z-10 w-full h-14 rounded-4xl bg-[#F3F7FC] text-[#15509C] text-lg font-semibold"
                    >
                        {t("requestDemo")}
                    </button>
                </div>

            </div>
            </div>
        </section>
    )
}

export default ShapingAthletes
