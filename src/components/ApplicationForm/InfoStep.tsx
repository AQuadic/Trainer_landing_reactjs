import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const InfoStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="nationality" className='text-[#FFFFFF] text-base font-bold'>Nationality</Label>
        <Field
          as={Input}
          type="text"
          id="nationality"
          name="nationality"
          placeholder="Nationality"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="nationality"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="address" className='text-[#FFFFFF] text-base font-bold'>Address</Label>
        <Field
          as={Input}
          type="text"
          id="address"
          name="address"
          placeholder="Enter Your Address"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="address"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="previous_academy" className='text-[#FFFFFF] text-base font-bold'>Previous Club / Academy</Label>
        <Field
          as={Input}
          type="text"
          id="previous_academy"
          name="previous_academy"
          placeholder="Enter Your Previous Club / Academy"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="previous_academy"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="school" className='text-[#FFFFFF] text-base font-bold'>School / University</Label>
        <Field
          as={Input}
          type="text"
          id="school"
          name="school"
          placeholder="Enter Your School / University"
          className='h-12 bg-white'
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
