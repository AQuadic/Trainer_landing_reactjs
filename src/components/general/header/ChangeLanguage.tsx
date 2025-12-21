"use client";

interface Props {
  isHome?: boolean;
}

const ChangeLanguage = ({ isHome = false }: Props) => {
  return (
    <button className="flex items-center justify-center gap-2 transition-colors duration-300">
      <img
        src={isHome ? "layout/language_white.svg" : "layout/language_black.svg"}
        alt="Change Language"
        className="transition-opacity duration-300"
      />
      <span
        className={`${
          isHome ? "text-white" : "text-foreground"
        } transition-colors duration-300`}
      >
        English
      </span>
    </button>
  );
};

export default ChangeLanguage;
