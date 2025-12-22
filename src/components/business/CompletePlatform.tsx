import Modern from "../icons/business/Modern";
import Smart from "../icons/business/Smart";
import Smooth from "../icons/business/Smooth";

const CompletePlatform = () => {
    const PricingFeaturesData = [
        {
            icon: Smooth,
            title: "Smooth & Intuitive Experience",
            content: "A user-friendly interface that helps you manage everything with ease."
        },
        {
            icon: Modern,
            title: "Modern & Professional Look",
            content: "A clean, premium design that elevates your academy’s image."
        },
        {
            icon: Smart,
            title: "Smart Organization for Details",
            content: "From schedules to  payments everything organized in one place."
        }
    ]

    const bgColors = [
        "#FFF6F6", 
        "#F8FFF6", 
        "#FFFFED"
    ];

    return (
        <section className="container md:py-17 py-8">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">A Complete Platform to Manage & Grow Your Sports Academy</h2>
            <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] text-center md:mt-6 mt-3">
                Empower your academy with a seamless system that simplifies management, enhances operations, and elevates every part of the <br /> athletic experience.
            </p>

            <div className="md:mt-14.5 mt-4 flex flex-wrap justify-between md:gap-10 gap-4">
                {PricingFeaturesData.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`w-94.75 rounded-4xl flex items-center md:justify-center gap-3 px-3 py-4`} 
                            style={{ backgroundColor: bgColors[index] }}
                        >
                            <div className="flex items-center gap-2">
                                <item.icon />
                                <div>
                                    <p className="text-[#0F0F0F] md:text-xl text-xs font-semibold">{item.title}</p>
                                    <p className="text-[#565555] md:text-base text-[10px] font-semibold">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CompletePlatform
