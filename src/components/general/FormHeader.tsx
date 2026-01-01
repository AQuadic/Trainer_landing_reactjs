import { useMetaStore, type MetaState } from "../../store/useMetaStore";

const Header = () => {
  const meta = useMetaStore((state: MetaState) => state.meta);

  return (
    <header className="flex flex-col py-10 max-md:pb-0 items-center">
      <img
        src="/new_logo.png"
        alt="Logo"
        width={64}
        height={76}
        className="object-contain"
      />
      <p className="text-white pt-3 text-xl font-semibold max-md:hidden">
        {meta?.academy.name.en || "Academy"}
      </p>
    </header>
  );
};

export default Header;
