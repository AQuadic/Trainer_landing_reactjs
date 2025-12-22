const FlexibleScheduling = () => {
    return (
        <section className="container md:py-20 py-8 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="md:w-135 text-[#001B3F] md:text-[40px] text-base font-semibold leading-[150%] text-center md:text-start">
                    Flexible Scheduling for All Types of Classes and Sessions
                </h2>

                <p className="md:w-130 text-[#565555] md:text-xl text-sm font-medium md:mt-6 mt-3 text-center md:text-start">
                    Easily manage and organize different types of classes and training sessions with complete flexibility. Our system allows gym owners to create schedules tailored to their needs—whether it’s recurring classes, one-on-one sessions, or special events. With powerful scheduling tools, you can efficiently plan sessions and deliver a seamless experience for both trainers and members.
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

export default FlexibleScheduling
