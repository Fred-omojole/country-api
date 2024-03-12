import { Outlet } from "react-router-dom";
// import { SpeedInsights } from "@vercel/speed-insights/react"
// import Header from "./header";
import Field from "./hero";

const Layout = () => {
  return (
    <>
    {/* <SpeedInsights/> */}
      <Field />
      <Outlet />
    </>
  );
};

export default Layout;
