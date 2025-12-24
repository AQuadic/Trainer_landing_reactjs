import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { useFormikContext } from "formik";
import { useTeams } from "../../apis/teams";

const AboutStep = () => {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext<any>();
  const { data: teams, isLoading } = useTeams();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="full_name">Full Name (Required)</Label>
        <Input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter Full Name"
          value={values.full_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("full_name", e.target.value)
          }
          onBlur={handleBlur}
        />
        {touched.full_name && errors.full_name && (
          <div className="text-red-500 text-sm">
            {errors.full_name as string}
          </div>
        )}
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="birthdate">Date of Birth (Required)</Label>
        <Input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="YYYY-MM-DD"
          value={values.birthdate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("birthdate", e.target.value)
          }
          onBlur={handleBlur}
        />
        {touched.birthdate && errors.birthdate && (
          <div className="text-red-500 text-sm">
            {errors.birthdate as string}
          </div>
        )}
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="is_player">Request Type</Label>
        <Select
          value={values.is_player ? "true" : "false"}
          onValueChange={(val) => setFieldValue("is_player", val === "true")}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Player</SelectItem>
            <SelectItem value="false">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="team_id">Team</Label>
        <Select
          value={values.team_id?.toString()}
          onValueChange={(val) => setFieldValue("team_id", Number(val))}
        >
          <SelectTrigger className="w-full">
            <SelectValue
              placeholder={isLoading ? "Loading teams..." : "Select a Team"}
            />
          </SelectTrigger>
          <SelectContent>
            {teams?.map((team) => (
              <SelectItem key={team.id} value={team.id.toString()}>
                {team.name.en || team.name.ar}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {touched.team_id && errors.team_id && (
          <div className="text-red-500 text-sm">{errors.team_id as string}</div>
        )}
      </div>
    </div>
  );
};

export default AboutStep;
