import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ParentsStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="fatherName" className='text-[#FFFFFF] text-base font-bold'>Father's Name</Label>
        <Field
          as={Input}
          type="text"
          id="fatherName"
          name="fatherName"
          placeholder="Enter Your Father's Name"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="fatherName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="fatherMobile" className='text-[#FFFFFF] text-base font-bold'>Father's Mobile</Label>
        <Field
          as={Input}
          type="tel"
          id="fatherMobile"
          name="fatherMobile"
          placeholder="Enter Your Father's Mobile"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="fatherMobile"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="motherName" className='text-[#FFFFFF] text-base font-bold'>Mother's Name</Label>
        <Field
          as={Input}
          type="text"
          id="motherName"
          name="motherName"
          placeholder="Enter Your Mother's Name"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="motherName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="motherMobile" className='text-[#FFFFFF] text-base font-bold'>Mother's Mobile</Label>
        <Field
          as={Input}
          type="tel"
          id="motherMobile"
          name="motherMobile"
          placeholder="Enter Your Mother's Mobile"
          className='h-12 bg-white'
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
