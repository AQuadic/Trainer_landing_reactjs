import LocationBlack from "../icons/LocationBlack";
import LocationBlue from "../icons/LocationBlue";
import Icon1 from "../icons/locationCard/Icon1";
import Icon1Active from "../icons/locationCard/Icon1Active";
import Icon2 from "../icons/locationCard/Icon2";
import Icon2Active from "../icons/locationCard/Icon2Active";
import Icon3 from "../icons/locationCard/Icon3";
import Icon3Active from "../icons/locationCard/Icon3Active";

interface LocationCardProps {
  title: string;
  location: string;
  selected?: boolean;
  onClick?: () => void;
}

const LocationCard = ({
  title,
  location,
  selected,
  onClick,
}: LocationCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "relative bg-white rounded-4xl sm:rounded-[32px] md:h-50 flex items-center justify-center flex-col text-center p-6 shadow-sm transition-shadow duration-300 " +
        (selected
          ? "ring-2 ring-primary/20 shadow-[0_6px_18px_rgba(21,80,156,0.08)]"
          : "hover:shadow-md")
      }
    >
      {/* Mobile corner icons (absolute) - visible only on small screens */}
      <div className="sm:hidden">
        <div
          className="absolute top-10 left-20 pointer-events-none"
          aria-hidden
        >
          {selected ? <Icon1Active /> : <Icon1 />}
        </div>

        <div className="absolute top-5 right-5 pointer-events-none" aria-hidden>
          {selected ? <Icon2Active /> : <Icon2 />}
        </div>

        <div
          className="absolute bottom-5 right-20 pointer-events-none"
          aria-hidden
        >
          {selected ? <Icon3Active /> : <Icon3 />}
        </div>

        <div
          className="absolute bottom-5 left-5 pointer-events-none"
          aria-hidden
        >
          {selected ? <Icon2Active /> : <Icon2 />}
        </div>
      </div>
      <div className="mb-3">
        {selected ? <LocationBlue /> : <LocationBlack />}
      </div>

      <div
        className={
          (selected ? "text-[#15509c]" : "text-[#5D5D5D]") +
          " font-medium transition-colors duration-300"
        }
      >
        {title}
      </div>

      <div
        className={
          (selected ? "text-[#15509c]" : "text-[#8f8f8f]") +
          " text-sm mt-1 transition-colors duration-300"
        }
      >
        ({location})
      </div>
    </button>
  );
};

export default LocationCard;
