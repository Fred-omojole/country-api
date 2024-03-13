import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Header = () => {
  return (
    <div className="dark">

<section className="   dark:bg-slate-700  flex   items-center justify-between drop-shadow-sm bg-slate-200  lg:px-20 md:px-20 lg:max-w-[100%] p-5">
      <div className="text-black   dark:text-white text-lg p-[25px] px-5 lg:text-2xl md:text-2xl lg:font-semibold md:font-semibold ">
        <h1>Where in the world? </h1>
      </div>

      <div className="text-black dark:text-white ">
        <DarkModeIcon />
        <LightModeIcon className="" />
      </div>
    </section>
    </div>
  );
};

export default Header;
