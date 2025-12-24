import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const MedicalStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="medical_concerns" className='text-[#FFFFFF] text-base font-bold'>
          Does your daughter have any medical concerns we should be aware of
          (Asthma, allergies, etc...)?
        </Label>
        <Field
          as={Input}
          type="text"
          id="medical_concerns"
          name="medical_concerns"
          placeholder="Ex: etc..."
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="medical_concerns"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="medications" className='text-[#FFFFFF] text-base font-bold'>
          If so, Is she taking Any medications that may affect her in training?
        </Label>
        <Field
          as={Input}
          type="text"
          id="medications"
          name="medications"
          placeholder="Medications Name"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="medications"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default MedicalStep;
