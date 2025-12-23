import { useTranslation } from "react-i18next";

const HomeMembership = () => {
    const { t } = useTranslation("homemembership");
    return (
        <section className="bg-[#F3F7FC] md:py-19 py-8">
            <div className="container flex lg:flex-row flex-col items-center">
                <div>
                    <h2 className="text-[#001B3F] md:text-[32px] text-xl font-semibold">{t("membership_title")}</h2>
                    <p className="text-[#565555] md:text-2xl text-base font-medium leading-[150%] mt-6">
                        {t("membership_description")}
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
