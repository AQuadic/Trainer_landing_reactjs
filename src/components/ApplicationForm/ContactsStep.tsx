import { Field, ErrorMessage } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ContactsStep = () => {
  return (
    <div>
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="name">Full Name</Label>
        <Field
          as={Input}
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="email">E-mail</Label>
        <Field
          as={Input}
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your E-mail"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="phone">Mobile Number</Label>
        <Field
          as={Input}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Your Mobile Number"
        />
        <ErrorMessage
          name="phone"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="whatsapp">Mobile WhatsApp</Label>
        <Field
          as={Input}
          type="tel"
          id="whatsapp"
          name="whatsapp"
          placeholder="Enter Your Mobile WhatsApp"
        />
        <ErrorMessage
          name="whatsapp"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="grid w-full items-center gap-4 mt-6">
        <Label htmlFor="birthday">Date of Birth</Label>
        <Field
          as={Input}
          type="date"
          id="birthday"
          name="birthday"
          placeholder="DD/MM/YYYY"
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
