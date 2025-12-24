import React from "react";
import Stepper from "../components/general/stepper/Stepper";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import LocationStep from "../components/ApplicationForm/LocationStep";
import ContactsStep from "../components/ApplicationForm/ContactsStep";
import InfoStep from "../components/ApplicationForm/InfoStep";
import ParentsStep from "../components/ApplicationForm/ParentsStep";
import MedicalStep from "../components/ApplicationForm/MedicalStep";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useSubmitApplication } from "../apis/application";
import { calculateAge } from "../lib/utils";
import SuccessDialog from "../components/general/SuccessDialog";
import { useState, useEffect } from "react";

const validationSchemas = [
  Yup.object().shape({
    team_id: Yup.number().required("Please select a branch"),
  }),
  Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Mobile Number is required"),
    whatsapp: Yup.string().required("Mobile WhatsApp is required"),
    birthday: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date of Birth must be in YYYY-MM-DD format"
      ),
  }),
  Yup.object().shape({
    nationality: Yup.string().required("Nationality is required"),
    address: Yup.string().required("Address is required"),
    previous_academy: Yup.string(),
    school: Yup.string(),
  }),
  Yup.object().shape({
    fatherName: Yup.string().required("Father's Name is required"),
    fatherMobile: Yup.string().required("Father's Mobile is required"),
    motherName: Yup.string().required("Mother's Name is required"),
    motherMobile: Yup.string().required("Mother's Mobile is required"),
  }),
  Yup.object().shape({
    medical_concerns: Yup.string(),
    medications: Yup.string(),
  }),
];

const initialValues = {
  team_id: "",
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  birthday: "",
  nationality: "",
  address: "",
  previous_academy: "",
  school: "",
  fatherName: "",
  fatherMobile: "",
  motherName: "",
  motherMobile: "",
  medical_concerns: "",
  medications: "",
};

const ApplicationBranch = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutateAsync: submitApplication } = useSubmitApplication();

  // Manage history so browser Back button can return from success view to form
  useEffect(() => {
    if (!showSuccess) return;

    // push a history entry so Back will trigger popstate
    try {
      window.history.pushState({ formSuccess: true }, "");
    } catch (e) {
      /* ignore */
    }

    const onPop = () => {
      setShowSuccess(false);
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [showSuccess]);

  const steps = [
    "Branch Location",
    "Contacts",
    "Info",
    "Parents Information",
    "Medical Concerns",
  ];

  const handleSubmit = async (
    values: typeof initialValues,
    actions: any // Formik helpers
  ) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      actions.setSubmitting(false);
      return;
    }

    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        whatsapp: values.whatsapp,
        team_id: Number(values.team_id),
        type: "newcomer",
        parents: [
          {
            relation: "Father",
            name: values.fatherName,
            phone: values.fatherMobile,
            phone_country: "EG",
          },
          {
            relation: "Mother",
            name: values.motherName,
            phone: values.motherMobile,
            phone_country: "EG",
          },
        ],
        address: {
          details: values.address,
        },
        birthday: values.birthday,
        nationality: values.nationality,
        school: values.school,
        previous_academy: values.previous_academy,
        medical_concerns: values.medical_concerns,
        medications: values.medications,
        age: calculateAge(values.birthday),
        phone_country: "EG",
        whatsapp_country: "EG",
      };

      await submitApplication(payload);
      toast.success("Application submitted successfully!");
      // Reset form and step, then show success dialog
      actions.resetForm();
      setCurrentStep(0);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit application.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 md:py-8 max-w-4xl mx-auto">
      {!showSuccess && (
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onBack={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[currentStep]}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            {showSuccess ? (
              <SuccessDialog
                title="Registration Successful!"
                description="Your child has been successfully registered in the academy. You can now access all available services."
                onBack={() => setShowSuccess(false)}
              />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  variants={{
                    enter: { opacity: 0, y: 18, scale: 0.992, rotate: -0.6 },
                    center: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                        mass: 0.9,
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -12,
                      scale: 0.992,
                      transition: { duration: 0.3 },
                    },
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                >
                  {currentStep === 0 && <LocationStep />}
                  {currentStep === 1 && <ContactsStep />}
                  {currentStep === 2 && <InfoStep />}
                  {currentStep === 3 && <ParentsStep />}
                  {currentStep === 4 && <MedicalStep />}
                </motion.div>
              </AnimatePresence>
            )}
            {!showSuccess && (
              <div
                className={
                  "flex items-center mt-8 " +
                  (currentStep > 0 ? "justify-between" : "justify-end")
                }
              >
                {currentStep > 0 && (
                  <Button
                    type="button"
                    onClick={() =>
                      setCurrentStep((prev) => Math.max(0, prev - 1))
                    }
                    className="max-md:hidden border border-white text-white bg-transparent hover:bg-white/5 px-12 py-6 rounded-sm"
                  >
                    Previous
                  </Button>
                )}

                {currentStep < steps.length - 1 ? (
                  <Button
                    type="submit"
                    className=" max-md:w-full text-lg font-bold  px-12 py-6 rounded-sm"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className=" max-md:w-full text-lg font-bold  px-12 py-6 rounded-sm"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                )}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationBranch;
