import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ParentsStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="fatherName">Father's Name</Label>
        <Field
          as={Input}
          type="text"
          id="fatherName"
          name="fatherName"
          placeholder="Enter Your Father's Name"
        />
        <ErrorMessage
          name="fatherName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="fatherMobile">Father's Mobile</Label>
        <Field
          as={Input}
          type="tel"
          id="fatherMobile"
          name="fatherMobile"
          placeholder="Enter Your Father's Mobile"
        />
        <ErrorMessage
          name="fatherMobile"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="motherName">Mother's Name</Label>
        <Field
          as={Input}
          type="text"
          id="motherName"
          name="motherName"
          placeholder="Enter Your Mother's Name"
        />
        <ErrorMessage
          name="motherName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="motherMobile">Mother's Mobile</Label>
        <Field
          as={Input}
          type="tel"
          id="motherMobile"
          name="motherMobile"
          placeholder="Enter Your Mother's Mobile"
        />
        <ErrorMessage
          name="motherMobile"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default ParentsStep;
