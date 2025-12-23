import ClassBooking from "@/components/icons/business/ClassBooking"
import MemberEngagement from "@/components/icons/business/MemberEngagement"
import MembershipManagement from "@/components/icons/business/MembershipManagement"

const SeeMoreFeatures = () => {
    return (
        <section className="container flex flex-wrap items-center justify-between gap-6 md:py-23 py-8">
            <div className="md:w-[384px] md:h-59 py-4 px-3 rounded-4xl bg-[#F8FFF6] flex gap-3">
                <div>
                    <MemberEngagement />
                </div>
                <div>
                    <h3 className="text-[#0F0F0F] md:text-xl text-sm font-semibold leading-[150%]">Member Engagement</h3>
                    <p className="text-[#565555] md:text-lg text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
                        Keep your members informed with in-app notifications, class schedules, and engaging fitness content that motivates them to stay committed to your club.
                    </p>
                </div>
            </div>

            <div className="md:w-[384px] md:h-59 py-4 px-3 rounded-4xl bg-[#FFFFED] flex gap-3">
                <div>
                    <ClassBooking />
                </div>
                <div>
                    <h3 className="text-[#0F0F0F] md:text-xl text-sm font-semibold leading-[150%]">Class Booking Made Easy</h3>
                    <p className="text-[#565555] md:text-lg text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
                        Let members book classes directly through the app while you manage schedules, cancellations, and updates with ease—ensuring a smooth, hassle-free experience.
                    </p>
                </div>
            </div>

            <div className="md:w-[384px] md:h-59 py-4 px-3 rounded-4xl bg-[#F8FFF6] flex gap-3">
                <div>
                    <MembershipManagement />
                </div>
                <div>
                    <h3 className="text-[#0F0F0F] md:text-xl text-sm font-semibold leading-[150%]">Membership Management</h3>
                    <p className="text-[#565555] md:text-lg text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
                        Let members easily view and manage their memberships, track payments, handle renewals, and even pause their subscriptions—all in one convenient place.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SeeMoreFeatures
