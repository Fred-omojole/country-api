import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
     setDarkMode(!darkMode)
  }
  return (
   <div className={`${darkMode && "dark"}`}>
 <section className=" flex items-center justify-between dark:bg-slate-700 drop-shadow-lg bg-white lg:px-20 md:px-20 lg:max-w-[100%] p-5 ">
      <div className="text-slate-700 dark:text-white text-lg p-[25px] px-5 lg:text-2xl md:text-2xl lg:font-semibold md:font-semibold ">
        <h1>Where in the world? </h1>
      </div>

      {/* <div className="> */}
       <button className="text-slate-700 dark:text-white" onClick={toggleDarkMode}> 
       {darkMode ? <DarkModeIcon /> : <LightModeIcon/>}
       </button>
      {/* </div> */}
    </section>

   </div>
  );
};

export default Header;
