import React, { useState, useEffect } from "react";
import Stepper from "../components/general/stepper/Stepper";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import LocationStep from "../components/ApplicationForm/LocationStep";
import AboutStep from "../components/KitForm/AboutStep";
import KitStep from "../components/KitForm/KitStep";
import OverviewStep from "../components/KitForm/OverviewStep";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useSubmitKitRequest } from "../apis/application";
import SuccessDialog from "../components/general/SuccessDialog";

const validationSchemas = [
  Yup.object().shape({
    branch_id: Yup.number().required("Please select a branch"),
  }),
  Yup.object().shape({
    full_name: Yup.string().required("Full Name is required"),
    birthdate: Yup.string().required("Date of Birth is required"),
    team_id: Yup.number().required("Please select a team"),
  }),
  Yup.object().shape({
    name: Yup.string()
      .required("Name on Kit is required")
      .max(9, "Max 9 characters"),
    number: Yup.string().required("Kit Number is required"),
    kit_size: Yup.string().required("Kit Size is required"),
    tshirt_size: Yup.string().required("T-shirt Size is required"),
    hoodie_size: Yup.string().required("Hoodie Size is required"),
  }),
  Yup.object().shape({}),
];

const initialValues = {
  branch_id: "",
  team_id: "",
  full_name: "",
  birthdate: "",
  is_player: true,
  name: "",
  number: "",
  kit_size: "",
  tshirt_size: "",
  hoodie_size: "",
  received: false,
};

const KitRequest = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutateAsync: submitKitRequest } = useSubmitKitRequest();

  const steps = ["Branch Location", "About", "Kit", "Overview"];

  // Manage history so browser Back button can return from success view to form
  useEffect(() => {
    if (!showSuccess) return;

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
        team_id: Number(values.team_id),
        branch_id: Number(values.branch_id),
        from_branch_id: Number(values.branch_id), // Defaulting to same branch
        name: values.name,
        full_name: values.full_name,
        birthdate: values.birthdate,
        number: values.number,
        hoodie_size: values.hoodie_size,
        kit_size: values.kit_size,
        tshirt_size: values.tshirt_size,
        received: values.received,
        is_player: values.is_player,
        whatsapp_country: "EG",
      };

      await submitKitRequest(payload);
      toast.success("Kit request submitted successfully!");
      actions.resetForm();
      setCurrentStep(0);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit kit request.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 md:py-8">
      {!showSuccess && (
        <Stepper
          hideLastStep={true}
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
                title="Kit Request Sent!"
                description="Your request for the academy kit has been successfully submitted"
                onBack={() => setShowSuccess(false)}
              />
            ) : (
              <>
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
                    {currentStep === 0 && (
                      <LocationStep fieldName="branch_id" />
                    )}
                    {currentStep === 1 && <AboutStep />}
                    {currentStep === 2 && <KitStep />}
                    {currentStep === 3 && <OverviewStep />}
                  </motion.div>
                </AnimatePresence>
                <div
                  className={
                    "flex items-center max-w-4xl mx-auto pb-8 mt-8 " +
                    (currentStep > 0 ? "justify-between" : "justify-end") +
                    (currentStep === 2 ? "  max-w-310" : "") +
                    (currentStep > 2 ? "  max-w-135" : "")
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
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default KitRequest;
