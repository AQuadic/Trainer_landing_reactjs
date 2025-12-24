import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const BrandedUserExperience = () => {
    const { t } = useTranslation("businesstype");
    return (
        <section className="bg-[#F3F7FC] md:py-12 py-4">
            <div className="container flex flex-wrap items-center justify-between gap-4">
                <video
                    className="md:w-121.5 w-48.5 md:h-121.75 h-48.75 rounded-xl shadow-lg mx-auto md:mx-0"
                    src='/images/business/iphone-zoom-straight-out.mp4'
                    controls
                    autoPlay={false}
                    loop={false}
                    muted={false}
                >
                </video>
                <div>
                    <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center md:text-start">
                        {t("brandedUserExperienceTitle")}
                    </h2>
                    <p className="md:w-130 text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                        {t("brandedUserExperienceDescription")}
                    </p>
                    <Link to='/see_more'>
                        <div className="relative mt-6 w-full rounded-4xl p-[1.5px] gradient-border">
                            <button
                                className="relative z-10 w-full h-14 rounded-4xl bg-[#F3F7FC] text-[#15509C] text-lg font-semibold"
                                >
                                {t("seeMore")}
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BrandedUserExperience
