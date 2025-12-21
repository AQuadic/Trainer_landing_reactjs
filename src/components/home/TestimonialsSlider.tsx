import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
import Star from "../icons/home/Star"

const reviews = [
  {
    username: "“Using this platform has completely transformed the way I run my gym. Bookings, memberships, and payments are now effortless !”",
  },
  {
    username: "“Using this platform has completely transformed the way I run my gym. Bookings, memberships, and payments are now effortless !”",
  },
  {
    username: "“Using this platform has completely transformed the way I run my gym. Bookings, memberships, and payments are now effortless !”",
  },
  {
    username: "“Using this platform has completely transformed the way I run my gym. Bookings, memberships, and payments are now effortless !”",
  },
  {
    username: "“Using this platform has completely transformed the way I run my gym. Bookings, memberships, and payments are now effortless !”",
  },
  {
    username: "“Using this platform has completely transformed the way I run my gym. Bookings, memberships, and payments are now effortless !”",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  username,
}: {
  username: string
}) => {
  return (
    <figure
      className={cn(
        "relative md:h-68.5 h-37.25 md:w-70.5 w-40 cursor-pointer overflow-hidden rounded-4xl bg-[#F3F7FC] p-4 md:mt-20 mt-6",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <p className="text-[#0F0F0F] md:text-lg text-[10px] font-semibold">{username}</p>
          <div className="flex items-center gap-2 md:mt-4 mt-2">
            <img 
                src="/images/home/client.jpg" 
                alt="client"
                className="md:w-12 w-6 md:h-12 h-6 rounded-full"
            />
            <div>
                <h3 className="text-[#565555] md:text-base text-[10px] font-medium">Mohamed Ahmed</h3>
                <div className="flex items-center gap-0.5">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

export function TestimonialsSlider() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}
