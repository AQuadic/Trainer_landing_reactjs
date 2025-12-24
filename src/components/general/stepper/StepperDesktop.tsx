import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";

interface StepperDesktopProps {
  steps: string[];
  currentStep: number;
  hideLastStep?: boolean;
}

const StepperDesktop = ({
  steps,
  currentStep,
  hideLastStep,
}: StepperDesktopProps) => {
  const visibleSteps = hideLastStep ? steps.slice(0, -1) : steps;
  const effectiveCurrent = Math.min(
    currentStep,
    Math.max(0, visibleSteps.length - 1)
  );

  return (
    <div className="flex gap-1 items-center justify-center w-full">
      {visibleSteps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === visibleSteps.length - 1;
        const isCurrent = index === effectiveCurrent;
        const isCompleted = index < currentStep;

        let clipPath = "";
        if (isFirst) {
          clipPath =
            "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)";
        } else if (isLast) {
          clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)";
        } else {
          clipPath =
            "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)";
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className={cn(
              "relative h-[50px] w-[190px] flex items-center justify-center",
              !isFirst && "-ml-[18px]",
              isCurrent ? "z-10" : "z-0"
            )}
            style={
              isCurrent
                ? { filter: "drop-shadow(0 0 2px var(--primary))" }
                : undefined
            }
          >
            <motion.div
              className={cn(
                "w-full h-full flex items-center justify-center px-8 text-sm font-medium text-center transition-colors duration-300 rounded-sm overflow-hidden",
                isCompleted
                  ? "bg-primary text-white"
                  : isCurrent
                  ? "bg-[#E5F5FF] text-blue-700"
                  : "bg-[#F1F1F1] text-[#5D5D5D]"
              )}
              style={{ clipPath }}
              whileHover={{ filter: "brightness(0.95)" }}
            >
              <span className="truncate w-full">{step}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StepperDesktop;
