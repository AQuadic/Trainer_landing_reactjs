import FeaturesSchedulingHeader from "@/components/features/features_scheduling/FeaturesSchedulingHeader"
import FlexibleScheduling from "@/components/features/features_scheduling/FlexibleScheduling"
import SmartClass from "@/components/features/features_scheduling/SmartClass"
import HomeTestimonials from "@/components/home/HomeTestimonials"

const FeaturesScheduling = () => {
    return (
        <div>
            <FeaturesSchedulingHeader />
            <SmartClass />
            <FlexibleScheduling />
            <HomeTestimonials />
        </div>
    )
}

export default FeaturesScheduling
