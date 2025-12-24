import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const InfoStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="nationality">Nationality</Label>
        <Field
          as={Input}
          type="text"
          id="nationality"
          name="nationality"
          placeholder="Nationality"
        />
        <ErrorMessage
          name="nationality"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="address">Address</Label>
        <Field
          as={Input}
          type="text"
          id="address"
          name="address"
          placeholder="Enter Your Address"
        />
        <ErrorMessage
          name="address"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="previous_academy">Previous Club / Academy</Label>
        <Field
          as={Input}
          type="text"
          id="previous_academy"
          name="previous_academy"
          placeholder="Enter Your Previous Club / Academy"
        />
        <ErrorMessage
          name="previous_academy"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="school">School / University</Label>
        <Field
          as={Input}
          type="text"
          id="school"
          name="school"
          placeholder="Enter Your School / University"
        />
        <ErrorMessage
          name="school"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default InfoStep;
