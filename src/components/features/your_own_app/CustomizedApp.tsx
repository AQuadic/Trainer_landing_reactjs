import { useTranslation } from "react-i18next";

const CustomizedApp = () => {
    const { t } = useTranslation("ownapp");
    return (
        <section className="container md:py-20 py-8 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="md:w-135 text-[#001B3F] md:text-[40px] text-base font-semibold leading-[150%] text-center md:text-start">
                    {t('fullyCustomized')}
                </h2>

                <p className="md:w-130 text-[#565555] md:text-xl text-sm font-medium md:mt-6 mt-3 text-center md:text-start">
                    {t('getAppDescription')}
                </p>
            </div>

            <div>
                <img 
                    src="/images/features/flexible_options.png"
                    alt="flexible_options"
                />
            </div>
        </section>
    )
}

export default CustomizedApp
