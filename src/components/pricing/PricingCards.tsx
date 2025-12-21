import { Link } from "react-router-dom"
import BackArrow from "../icons/pricing/BackArrow"
import Basic from "../icons/pricing/Basic"
import BlueCheck from "../icons/pricing/BlueCheck"
import NavyCheck from "../icons/pricing/NavyCheck"
import Unlimited from "../icons/pricing/Unlimited"

const PricingCards = () => {
    return (
        <section className="container md:my-24 my-28">
            <Link to='/' className="md:hidden flex items-center gap-21.75 mb-6">
                <BackArrow />
                <p className="text-[#0F0F0F] text-xl font-semibold">Pricing</p>
            </Link>

            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">
                Fitness Plans to Match Every Goal
            </h2>

            <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
                Whether you’re just starting your fitness journey or aiming to reach peak performance, our subscription plans are designed to suit <br /> every athlete’s needs and lifestyle. Pick the plan that fits you best and start achieving your goals today.
            </p>

            <div className="md:mt-17 mt-6 flex flex-wrap justify-between gap-6">
                <div className="w-94.75 h-240.5 border border-[#C8C8C8] rounded-[32px] py-8 px-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Basic />
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">Basic</h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    Perfect for starting your sports <br /> business journey
                                </p>
                            </div>
                        </div>
                        <ul className="mt-8">
                            <li className="flex items-center gap-2">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Membership Management.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Class & Appointment Scheduling.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Online Payments.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Business App.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Staff Management.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Reporting.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">English & Arabic.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Add Club Activities in our App.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Access Control System.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">VAT & E-Invoicing.</p>
                            </li>
                        </ul>
                    </div>
                    <button className="w-full h-14 border border-[#C8C8C8] rounded-4xl text-[#0F0F0F] text-lg font-semibold cursor-pointer">
                        Ask For Price
                    </button>
                </div>

                <div className="relative w-94.75 h-240.5 rounded-[32px] p-0.5 bg-linear-to-r from-[#15509C] to-[#071C36]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-31.25 h-8.5 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-[24px] text-[#FEFEFE] text-lg font-bold flex items-center justify-center">
                        Best Seller
                    </div>
                    <div className="w-full h-full rounded-[30px] bg-[#F2F2F9] py-8 px-4 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                            <Basic />
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">Pro</h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    For growing businesses looking to <br /> expand and manage efficiently
                                </p>
                            </div>
                        </div>
                        <ul className="mt-8">
                            <li className="flex items-center gap-2">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Membership Management</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Class & Appointment Scheduling</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Online Payments</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Powerful Dashboard</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Business App</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Staff Management</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Event Management with E-Tickets</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Reporting</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Accounting System Integration</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">English & Arabic</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Add Club Activities in our App.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Access Control System</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Reminders & Notifications</p>
                            </li>
                        </ul>
                        </div>

                        <button className="w-full h-14 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] text-[#FEFEFE] rounded-4xl text-lg font-semibold cursor-pointer">
                            Ask For Price
                        </button>
                    </div>
                </div>

                <div className="w-94.75 h-240.5 border border-[#C8C8C8] rounded-[32px] py-8 px-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Unlimited />
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">Unlimited</h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    Full access to all features for established sports businesses
                                </p>
                            </div>
                        </div>
                        <ul className="mt-8">
                            <li className="flex items-center gap-2">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Membership Management.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Class & Appointment Scheduling.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Online Payments.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Business App.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Staff Management.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Reporting.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">English & Arabic.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Add Club Activities in our App.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Access Control System.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">VAT & E-Invoicing.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Branded App.</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Event Management with E-Tickets</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Accounting System Integration</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Powerful Dashboard</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">Reminders & Notifications</p>
                            </li>
                        </ul>
                    </div>
                    <button className="w-full h-14 border border-[#C8C8C8] rounded-4xl text-[#0F0F0F] text-lg font-semibold cursor-pointer">
                        Ask For Price
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PricingCards
