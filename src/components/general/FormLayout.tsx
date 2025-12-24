import { useOutlet } from "react-router-dom";
import Header from "./FormHeader";

const FormLayout = () => {
  const outlet = useOutlet();
  return (
    <main
      className="relative min-h-screen bg-gray-900 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* 70% black overlay placed over the background image but under content */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.7)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 p-4 pb-10">
        <Header />
        {outlet}
      </div>
    </main>
  );
};

export default FormLayout;
