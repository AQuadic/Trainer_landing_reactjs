import Success from "../icons/Success";

interface SuccessDialogProps {
  title: string;
  description: string;
  onBack?: () => void;
}

const SuccessDialog = ({ title, description }: SuccessDialogProps) => {
  return (
    <div className="bg-white rounded-[24px] px-6 py-20 text-center flex flex-col gap-5 items-center max-w-150 mx-auto mt-28">
      <Success />
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="font-medium text-sm"> {description}</p>
    </div>
  );
};

export default SuccessDialog;
