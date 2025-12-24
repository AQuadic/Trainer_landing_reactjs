import { useTranslation } from "react-i18next";

const DataDriven = () => {
    const { t } = useTranslation("businesstype");
    return (
        <section className="container md:py-17 py-8 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center md:text-start">
                    {t("dataDrivenTitle")}
                </h2>
                <p className="md:w-132.5 text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    {t("dataDrivenDescription")}
                </p>
                <div className="relative mt-6 w-full rounded-4xl p-[1.5px] gradient-border">
                    <button
                        className="relative z-10 w-full h-14 rounded-4xl bg-white text-[#15509C] text-lg font-semibold"
                        >
                        {t("requestDemo")}
                    </button>
                </div>
            </div>

            <div className="flex justify-between gap-6">
                <div>
                    <img 
                        src="/images/business/business_chart.png"
                        alt="business_chart"
                        className="md:w-70.5 w-40 md:h-83.5 h-47.25"
                    />
                </div>

                <div>
                    <img 
                        src="/images/business/business_dashboard.png"
                        alt="business_dashboard"
                        className="md:w-70.25 w-40 md:h-79.75 h-47.25"
                    />
                </div>
            </div>
        </section>
    )
}

export default DataDriven
