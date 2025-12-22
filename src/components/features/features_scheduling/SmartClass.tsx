const SmartClass = () => {
    return (
        <section className="bg-[#F3F7FC] py-8 mt-8">
            <div className="container flex flex-wrap items-center justify-between gap-8">
                <div className="mx-auto md:mx-0">
                    <img
                        src="/images/features/smart_class.png"
                        alt="smart_class"
                        className="w-40.75 h-53.75 md:w-114.25 md:h-136.5"
                    />
                </div>

                <div>
                <h2 className="md:w-96 text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    Smart Class Scheduling
                </h2>

                <p className="md:w-132.5 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    Organizing classes and sessions has never been this simple. Our scheduling feature gives gym owners full control over class timetables, trainer sessions, and bookings—all in one place. Easily create, update, or reschedule sessions in seconds, ensuring a smooth experience for both trainers and members while maximizing time and resources.
                </p>
            </div>
            </div>
        </section>
    )
}

export default SmartClass
