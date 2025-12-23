import BackArrow from "@/components/icons/pricing/BackArrow";
import { Link } from "react-router-dom";

const SeeMoreHeader = () => {
    return (
        <section className="relative md:pb-24 md:pt-24 pt-16 gap-6 overflow-hidden">
        <Link to='/' className="md:hidden flex items-center gap-13.25 mb-6 relative z-99 px-8">
            <BackArrow />
            <p className="text-[#0F0F0F] text-xl font-semibold">Sports Academies</p>
        </Link>
        <div className="container">
            <div className="absolute inset-0">
            <img
            src="/images/features/app_bg.png"
            alt="background"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F3F7FC] opacity-95"></div>
        </div>

        <div className="relative z-10 flex-1">
            <h2 className="text-[#001B3F] md:text-[40px] text-base font-semibold text-center">
                Elevate Your Club with a Professional Custom App
            </h2>

            <p className="text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
                Offer your members a seamless, branded experience that simplifies bookings, payments, and communication—making it easier for them to stay connected and for you to manage your club effortlessly.
            </p>

            <button className="md:w-147 w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-linear-to-r from-[#6594D0] to-[#071C36] rounded-3xl flex items-center justify-center mx-auto">
            Request a demo
            </button>
        </div>

        <div className="relative z-10 flex-1 flex justify-center">
            <img
            src="/images/business/see_more_header.png"
            alt="see_more_header"
            className="md:mt-14.5 mt-6 md:w-140.75 md:h-full w-62.75"
            />
        </div>
        </div>
        </section>
    )
}

export default SeeMoreHeader;
