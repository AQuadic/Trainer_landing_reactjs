import { TestimonialsSlider } from "./TestimonialsSlider"

const HomeTestimonials = () => {
    return (
        <section className="container md:py-17">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold text-center">
                Their Words Are Our Pride
            </h2>
            <p className="text-[#565555] md:text-2xl text-xs font-medium md:mt-6 mt-3 text-center">
                Hear directly from our clients how our platform has transformed the way they manage and grow their sports businesses.
            </p>
            <TestimonialsSlider />
        </section>
    )
}

export default HomeTestimonials
