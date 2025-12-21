"use client";

interface Props {
  isHome?: boolean;
}

const RequestDemo = ({ isHome = false }: Props) => {
  const gradient = "linear-gradient(90deg, #15509C 0%, #071C36 100%)";

  return (
    <button
      className={`px-4 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${
        isHome ? "bg-[#FEFEFE33] text-white" : "text-white shadow-lg"
      }`}
      style={!isHome ? { background: gradient } : undefined}
    >
      Request a Demo
    </button>
  );
};

export default RequestDemo;
