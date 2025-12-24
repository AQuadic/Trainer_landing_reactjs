import { ChevronLeft } from "lucide-react";
import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";

interface StepperMobileProps {
  steps: string[];
  currentStep: number;
  onBack?: () => void;
  hideLastStep?: boolean;
}

const StepperMobile = ({
  steps,
  currentStep,
  onBack,
  hideLastStep,
}: StepperMobileProps) => {
  const visibleSteps = hideLastStep ? steps.slice(0, -1) : steps;
  const effectiveCurrent = Math.min(
    currentStep,
    Math.max(0, visibleSteps.length - 1)
  );
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="p-2 flex items-center justify-center text-white hover:opacity-90 w-full mb-4 "
        >
          <ChevronLeft />

          <div className="flex-1 text-center font-semibold text-lg  text-white">
            {visibleSteps[effectiveCurrent]}
          </div>

          <div className="w-8" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 w-full px-4">
        {visibleSteps.map((_, index) => {
          const isCurrent = index === effectiveCurrent;
          const isCompleted = index < effectiveCurrent;

          return (
            <motion.div
              key={index}
              initial={{ scaleX: 0.8, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                "h-2.5 flex-1 rounded-full transition-all duration-500 ease-in-out",
                isCompleted
                  ? "bg-primary"
                  : isCurrent
                  ? "bg-[#E5F5FF] ring-1 ring-primary/30 shadow-[0_0_8px_rgba(21,80,156,0.2)]"
                  : "bg-[#F1F1F1]"
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepperMobile;
