const FeaturesSchedulingHeader = () => {
    return (
        <section className="container md:pb-22 pt-44 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="md:w-96 text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    Effortless Scheduling Management
                </h2>

                <p className="md:w-132.5 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    Simplify and organize your class and session scheduling with ease. From creating timetables to managing bookings and rescheduling sessions, our platform helps you stay in control while saving time. Deliver a smooth and well-organized experience for both trainers and members—scheduling made simple.
                </p>

                <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)] rounded-4xl">
                    Request a demo
                </button>
            </div>

            <div>
                <img
                    src="/images/features/schedulingm_anagement.png"
                    alt="management_header"
                />
            </div>
        </section>
    )
}

export default FeaturesSchedulingHeader
