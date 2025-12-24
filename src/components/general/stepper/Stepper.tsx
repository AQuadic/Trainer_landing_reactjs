import StepperDesktop from "./StepperDesktop";
import StepperMobile from "./StepperMobile";

interface StepperProps {
  steps: string[];
  currentStep: number;
  onBack?: () => void;
  hideLastStep?: boolean;
}

const Stepper = (props: StepperProps) => {
  const { steps, currentStep, onBack, hideLastStep } = props;

  return (
    <div className="md:mb-20">
      <div className="hidden md:block">
        <StepperDesktop
          hideLastStep={hideLastStep}
          steps={steps}
          currentStep={currentStep}
        />
      </div>
      <div className="block md:hidden">
        <StepperMobile
          hideLastStep={hideLastStep}
          steps={steps}
          currentStep={currentStep}
          onBack={onBack}
        />
      </div>
    </div>
  );
};

export default Stepper;
