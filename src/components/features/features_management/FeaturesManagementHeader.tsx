import BackArrow from "@/components/icons/pricing/BackArrow"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const FeaturesManagementHeader = () => {
    const { t } = useTranslation("management");
    return (
        <section className="container md:pb-22 pt-20 ">
            <Link to='/' className="md:hidden flex items-center gap-13.25 mb-6">
                <BackArrow />
                <p className="text-[#0F0F0F] text-xl font-semibold">
                    {t('management')}
                </p>
            </Link>
            <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-6">
                <div>
                <h2 className="md:w-96 text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    {t('effortlessSchedulingManagement')}
                </h2>

                <p className="md:w-132.5 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    {t('simplifyAndOrganize')}
                </p>

                <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)] rounded-4xl">
                    {t('requestDemo')}
                </button>
            </div>

            <div>
                <img
                    src="/images/features/management_header.png"
                    alt="management_header"
                />
            </div>
            </div>
        </section>
    )
}

export default FeaturesManagementHeader