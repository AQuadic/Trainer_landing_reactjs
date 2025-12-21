import ContactForm from "../general/ContactForm"

const BlogContact = () => {

    return (
        <section className="container md:my-37 my-8 md:bg-transparent bg-[#F3F7FC] py-4 md:py-0">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">We’re Here to Support You</h2>
            <p className="text-[#565555] md:text-2xl text-xs font-medium leading-[150%] md:mt-6 mt-3 text-center">
                Reach out to us anytime — our team is always ready to help you find the best solutions, answer <br /> your questions, and guide you toward growing your sports business with confidence.
            </p>

            <div className="md:mt-17 mt-6 flex items-center justify-between gap-6">
                <ContactForm />
                <div>
                    <img 
                        src="/images/blog/blog_contact.jpg"
                        alt="blog contact"
                        className="w-[384px] h-142 opacity-50 rounded-4xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogContact
