import { useFormikContext } from "formik";
import LocationCard from "../general/LocationCard";
import { useBranches } from "../../apis/branches";

const LocationStep = ({ fieldName = "team_id" }: { fieldName?: string }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();
  const { data, isLoading, isError, error } = useBranches();

  if (isLoading) {
    return <div className="text-center">Loading branches…</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-600">Error: {error?.message}</div>
    );
  }

  const branches = data?.data ?? [];

  return (
    <div className="space-y-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {branches.map((b) => (
          <LocationCard
            key={b.id}
            title={b.name?.en || b.name?.ar || `Branch ${b.id}`}
            location={b.address?.details || b.description?.en || ""}
            selected={values[fieldName] === b.id}
            onClick={() => setFieldValue(fieldName, b.id)}
          />
        ))}
      </div>
      {touched[fieldName] && errors[fieldName] && (
        <div className="text-red-500 text-sm text-center">
          {errors[fieldName] as string}
        </div>
      )}
    </div>
  );
};

export default LocationStep;
