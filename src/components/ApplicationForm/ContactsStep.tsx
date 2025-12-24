import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ContactsStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="name" className='text-[#FFFFFF] text-base font-bold'>Full Name</Label>
        <Field
          as={Input}
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="email" className='text-[#FFFFFF] text-base font-bold'>E-mail</Label>
        <Field
          as={Input}
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your E-mail"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="phone" className='text-[#FFFFFF] text-base font-bold'>Mobile Number</Label>
        <Field
          as={Input}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Your Mobile Number"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="phone"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="whatsapp" className='text-[#FFFFFF] text-base font-bold'>Mobile WhatsApp</Label>
        <Field
          as={Input}
          type="tel"
          id="whatsapp"
          name="whatsapp"
          placeholder="Enter Your Mobile WhatsApp"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="whatsapp"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="birthday" className='text-[#FFFFFF] text-base font-bold'>Date of Birth</Label>
        <Field
          as={Input}
          type="date"
          id="birthday"
          name="birthday"
          placeholder="DD/MM/YYYY"
          className='h-12 bg-white'
        />
        <ErrorMessage
          name="birthday"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default ContactsStep;
