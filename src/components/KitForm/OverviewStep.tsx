import { useFormikContext } from "formik";

const OverviewStep = () => {
  const { values } = useFormikContext<any>();

  return (
    <section className="max-w-135 mx-auto">
      <div className="flex items-center gap-8 max-lg:mx-auto">
        <img
          width={240}
          height={641}
          src="/overview.png"
          alt="Tshirt Image"
          className="max-md:w-41 max-md:h-109.5"
        />
        <div className="relative ">
          <img
            width={240}
            height={641}
            src="/overview2.png"
            alt="Tshirt Image"
            className="max-md:w-41 max-md:h-109.5"
          />

          <div className="absolute left-1/2 top-8 md:top-12 transform -translate-x-1/2 pointer-events-none">
            <div className="text-white font-bold  md:text-2xl drop-shadow-md">
              {values.name}
            </div>
          </div>

          <div className="absolute left-1/2  top-16 md:top-24 transform -translate-x-1/2 pointer-events-none">
            <div className="text-white font-extrabold text-2xl md:text-4xl drop-shadow-md">
              {values.number}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewStep;
