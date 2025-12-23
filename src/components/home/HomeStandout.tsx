import WhiteArrow from "../icons/home/WhiteArrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const cards = [
  {
    id: "item-1",
    number: "01",
    title: "A Strong Network",
    content:
      "We are on a mission to build the largest sports community in the world. All athletes, personal trainers, and sports facility owners are invited to join our community.",
  },
  {
    id: "item-2",
    number: "02",
    title: "We Are Closer to You",
    content:
      "Our platform brings you closer to your clients and helps you manage your sports business efficiently.",
  },
  {
    id: "item-3",
    number: "03",
    title: "24/7 all time Support",
    content:
      "Our support team is available around the clock to assist you whenever you need help.",
  },
];

const HomeStandout = () => {
    return (
        <section className="container md:py-17">
        <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold text-center">
            What Makes Us Stand Out
        </h2>

        <p className="text-[#565555] md:text-2xl text-xs font-medium md:mt-6 mt-3 text-center">
            “We provide innovative tools, seamless management, and professional solutions that help your
            <br /> sports business grow and succeed.”
        </p>

        <Accordion
            type="single"
            collapsible
            className="
            flex flex-col gap-4 mt-6
            md:flex-row md:flex-wrap md:gap-6 md:justify-center md:mt-14
            "
        >
            {cards.map((card) => (
            <AccordionItem
                key={card.id}
                value={card.id}
                className="
                group rounded-[24px] overflow-hidden
                transition-all duration-500 ease-in-out
                w-full bg-[#F3F7FC]
                md:w-65.25
                md:data-[state=open]:w-96
                data-[state=open]:bg-[#184F9C]
                "
            >
                <AccordionTrigger
                    className="
                        relative w-full flex items-center justify-between
                        px-6 py-5 text-[#001B3F] text-lg font-semibold
                        md:flex-col md:justify-center md:items-center md:py-0
                        [&>svg]:hidden
                    "
                    >
                    <div
                        className="
                        flex items-center gap-3 md:hidden
                        transition-colors duration-300
                        group-data-[state=open]:text-white
                        "
                    >
                        <span className="font-bold">{card.number}</span>
                        <span>{card.title}</span>
                    </div>

                    <span
                        className="
                        hidden md:flex
                        h-121.5 items-center justify-center
                        vertical-text font-semibold text-[32px] text-[#001B3F]
                        transition-all duration-300
                        group-data-[state=open]:opacity-0
                        "
                    >
                        {card.title}
                    </span>

                    <span
                        className="
                        hidden md:block
                        absolute top-6 left-6 right-6
                        text-white text-xl font-semibold
                        opacity-0 translate-y-2
                        transition-all duration-300 delay-150
                        group-data-[state=open]:opacity-100
                        group-data-[state=open]:translate-y-0
                        "
                    >
                        {card.title}
                    </span>
                    </AccordionTrigger>

                <AccordionContent
                className="
                    px-6 pb-8 text-sm leading-relaxed
                    transition-all duration-300
                    text-[#001B3F]
                    group-data-[state=open]:text-white
                    md:text-white
                    md:opacity-0 md:translate-y-2
                    md:group-data-[state=open]:opacity-100
                    md:group-data-[state=open]:translate-y-0
                "
                >
                {card.content}
                    <div className="flex justify-center mt-8">
                    <div className="relative">
                        <button className="w-79.75 h-14 bg-[#FEFEFE33] rounded-4xl text-[#FEFEFE] text-lg font-semibold">
                        Request a Demo
                        </button>

                        <div className="absolute top-1/2 -right-6 -translate-y-1/2">
                        <WhiteArrow />
                        </div>
                    </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
        </section>
    );
};

export default HomeStandout;
