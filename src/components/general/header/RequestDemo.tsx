import { useLocation } from "react-router-dom";

const RequestDemo = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const buttonClass = isHomePage ? "bg-[#FEFEFE33] text-white" : "text-white";
  const gradient = "linear-gradient(90deg, #15509C 0%, #071C36 100%)";

  return (
    <button
      className={`${buttonClass} px-4 py-3 rounded-2xl text-lg font-semibold`}
      style={!isHomePage ? { background: gradient } : undefined}
    >
      Request a Demo
    </button>
  );
};

export default RequestDemo;
