const PricingContact = () => {
    return (
        <section className="md:bg-[#F3F7FC]">
            <div className="container md:py-17 my-4">
                <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">
                    Can’t Find What You’re Looking For?
                </h2>

                <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] mt-6 text-center">
                    If you didn’t find the features you need in our plans, let us know! Share what you’re looking for and we’ll make sure to support your <br /> sports business the best way possible.
                </p>

                <div className="flex md:flex-row flex-col-reverse items-center justify-between mt-12">
                    <form className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#0F0F0F] text-base font-medium">
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                className="md:w-146 w-full h-14 border border-[#C8C8C8] rounded-4xl mt-4 px-4"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className="text-[#0F0F0F] text-base font-medium">
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                className="md:w-146 w-full h-14 border border-[#C8C8C8] rounded-4xl mt-4 px-4"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="tel" className="text-[#0F0F0F] text-base font-medium">
                                Phone number
                            </label>
                            <input 
                                type="tel" 
                                name="tel"
                                className="md:w-146 w-full h-14 border border-[#C8C8C8] rounded-4xl mt-4 px-4"
                                placeholder="+20"
                            />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="feature" className="text-[#0F0F0F] text-base font-medium">
                                Feature
                            </label>
                            <textarea 
                                name="feature"
                                className="md:w-146 w-full h-36.75 border border-[#C8C8C8] rounded-4xl mt-4 p-4"
                                placeholder="Write your feature"
                            >
                            </textarea>
                        </div>

                        <button className="md:w-146 w-full h-14 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-4xl mt-6 text-[#FEFEFE] text-lg font-semibold">
                            Send
                        </button>
                    </form>
                    <div className="w-full">
                        <img 
                            src="/images/pricing/contact_img.png"
                            alt="contact img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingContact
