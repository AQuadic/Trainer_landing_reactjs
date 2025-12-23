import { useTranslation } from "react-i18next";
import { TestimonialsSlider } from "./TestimonialsSlider"

const HomeTestimonials = () => {
    const { t } = useTranslation("testimonials");
    return (
        <section className=" md:py-17 py-6">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold text-center">
                {t('testimonials_heading')}
            </h2>
            <p className="text-[#565555] md:text-2xl text-xs font-medium md:mt-6 mt-3 text-center">
                {t('testimonials_desc')}
            </p>
            <TestimonialsSlider />
        </section>
    )
}

export default HomeTestimonials
