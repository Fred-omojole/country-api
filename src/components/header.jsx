import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Header = () => {
  return (
    <section className="flex items-center justify-between bg-slate-700  mb-5 lg:px-20 md:px-20 lg:max-w-[100%] p-5 ">
      <div className="text-white text-lg p-[25px] px-5 lg:text-2xl md:text-2xl lg:font-semibold md:font-semibold ">
        <h1>Where in the world? </h1>
      </div>

      <div className="text-white">
        <DarkModeIcon />
        <LightModeIcon />
      </div>
    </section>
  );
};

export default Header;
