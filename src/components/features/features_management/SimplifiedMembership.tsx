const SimplifiedMembership = () => {
    return (
        <section className="bg-[#F3F7FC] py-8 mt-8">
            <div className="container flex flex-wrap items-center justify-between gap-8">
                <div className="mx-auto md:mx-0">
                    <img
                        src="/images/features/simplified_membership.png"
                        alt="simplified_membership"
                        className="w-40.75 h-53.75 md:w-114.25 md:h-136.5"
                    />
                </div>

                <div>
                <h2 className="md:w-96 text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    Simplified Membership Control
                </h2>

                <p className="md:w-132.5 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    Managing gym memberships has never been this easy. Take full control with our membership management feature, allowing gym owners to handle memberships quickly and effortlessly. You can pause, extend, or transfer memberships with ease, providing flexibility for both owners and members.
                </p>
            </div>
            </div>
        </section>
    )
}

export default SimplifiedMembership
