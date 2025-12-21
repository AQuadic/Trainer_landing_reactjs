const HomeMembership = () => {
    return (
        <section className="bg-[#F3F7FC] py-19">
            <div className="container flex l:flex-row flex-col items-center">
                <div>
                    <h2 className="text-[#001B3F] md:text-[32px] text-xl font-semibold">Full Control of Your Members</h2>
                    <p className="text-[#565555] md:text-2xl text-base font-medium leading-[150%] mt-6">
                        Easily manage memberships, track clients, organize every detail professionally, and ensure smooth communication, seamless scheduling, and a better experience for your members—all from one powerful platform.
                    </p>
                    <button className="w-full h-12 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)] rounded-4xl">
                        See More
                    </button>
                </div>
                <div className="w-full">
                    <img
                        src="../../../public/images/blog/membership_img.png"
                        alt="membership image"
                        className="md:w-123.75 h-107.5"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeMembership
