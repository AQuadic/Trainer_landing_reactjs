import { Link } from "react-router-dom"

const BrandIdentityCustomization = () => {
    return (
        <section className="bg-[#F3F7FC] md:py-12 py-4">
            <div className="container flex flex-wrap items-center justify-between gap-4">
                <video
                    className="md:w-121.5 w-48.5 md:h-121.75 h-48.75 rounded-xl shadow-lg mx-auto md:mx-0"
                    src='/images/business/iphone-zoom-straight-out.mp4'
                    controls
                    autoPlay={false}
                    loop={false}
                    muted={false}
                >
                </video>
                <div>
                    <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center md:text-start">Brand Identity Customization</h2>
                    <p className="md:w-130 text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                        Personalize your app to truly reflect your club’s unique brand identity. Adjust colors, logos, and fonts to match your style, ensuring every detail aligns with your club’s image. A cohesive and well-branded app not only strengthens your presence but also creates a memorable and professional experience for your members.
                    </p>
                    <Link to='/see_more'>
                        <button
                            className="w-full h-14 mt-6 rounded-4xl border-2 text-[#15509C] text-lg font-semibold"
                            style={{
                                borderImage: "linear-gradient(to right, #6594D0, #072E60) 1",
                            }}
                            >
                            Request a Demo
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BrandIdentityCustomization
