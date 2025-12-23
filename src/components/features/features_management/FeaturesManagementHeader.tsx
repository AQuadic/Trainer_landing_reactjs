import BackArrow from "@/components/icons/pricing/BackArrow"
import { Link } from "react-router-dom"

const FeaturesManagementHeader = () => {
    return (
        <section className="container md:pb-22 pt-22 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="md:w-96 text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    Effortless Scheduling Management
                </h2>

                <p className="md:w-132.5 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    Simplify and organize your membership management. From registration to renewal, our platform makes it easy to handle memberships, track member data, and ensure a seamless experience for your community. Experience membership management like never before.                
                </p>

                <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)] rounded-4xl">
                    Request a demo
                </button>
            </div>

            <div>
                <img
                    src="/images/features/management_header.png"
                    alt="management_header"
                />
            </div>

            <Link to='/' className="md:hidden flex items-center gap-13.25 mb-6">
                <BackArrow />
                <p className="text-[#0F0F0F] text-xl font-semibold">Management</p>
            </Link>
        </section>
    )
}

export default FeaturesManagementHeader
