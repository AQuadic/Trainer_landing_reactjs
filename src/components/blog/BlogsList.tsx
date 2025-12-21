import ai_img from '../../../public/images/blog/ai_img.jpg'
import BeginnerGuide from '../../../public/images/blog/beginner’sGuide.jpg'
import gym from '../../../public/images/blog/gym.jpg'
import clients from '../../../public/images/blog/new_clients.jpg'
import gym_software from '../../../public/images/blog/gym_software.jpg'
import planing_gym from '../../../public/images/blog/planning_gym.jpg'
import NavyArrow from '../icons/blogs/NavyArrow'

const BlogsList = () => {
    const blogLists = [
        {
            image: ai_img,
            text: "AI and Its Impact on the Sports Industry."
        },
        {
            image: BeginnerGuide,
            text: "Beginner’s Guide to Getting Started with Sports."
        },
        {
            image: gym,
            text: "How to Improve Operations in Your Gym."
        },
        {
            image: clients,
            text: "Boost Retention & Attract New Clients."
        },
        {
            image: gym_software,
            text: "Choosing the Right Gym Software."
        },
        {
            image: planing_gym,
            text: "Planning to Open a New Gym?"
        },
    ]
    return (
        <section className="md:pt-22 pt-8 container">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">Tips, Strategies & Inspiration</h2>
            <p className="text-[#565555] md:text-2xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
                Explore practical advice, proven strategies, and inspiring ideas to help you grow and manage your <br /> sports business more effectively.
            </p>

            <div className='md:mt-17 mt-6 flex flex-wrap gap-6'>
                {blogLists.map((item, index) => {
                    return (
                        <div key={index} className='w-[384px] h-78 border border-[#C8C8C8] rounded-[32px] py-6 px-3'>
                            <img 
                                src={item.image}
                                className='w-90 h-47 object-cover rounded-4xl'
                            />
                            <div className='flex items-center justify-between mt-4'>
                                <h2 className='text-[#001B3F] md:text-xl text-sm font-semibold'>{item.text}</h2>
                                <NavyArrow />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogsList
